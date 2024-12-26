'use client';

import { ChangeEvent, FormEvent, useCallback, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';
import { api } from '~/trpc/react';

import useSlugAvailability from '~/hooks/useSlugAvailability';
import { generateSlug, uploadImageFilesToIPFS } from '~/lib/utils';

import { Label } from '@radix-ui/react-label';
import { LuLoader2 } from 'react-icons/lu';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { Button, buttonVariants } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '~/components/ui/table';

import { ScrollArea } from '~/components/ui/scroll-area';
import ImageRow from '~/components/register/ImageRow';
import LoadingPopup from '~/components/register/LoadingPopup';

export interface ImageData {
  id: string;
  path: string;
  description: string;
}
export interface ImageFileData {
  id: string;
  file: File;
  description: string;
}

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [fileImgs, setFileImgs] = useState<ImageFileData[]>([]);
  const [companyID, setCompanyID] = useState('');

  const { isAvailable, handleSlugCheck } = useSlugAvailability();

  const createMockUp = api.mockUp.create.useMutation();

  const router = useRouter();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files).map((file) => ({
        id: uuidv4(),
        file,
        description: '',
      }));

      setFileImgs((prev) => [...prev, ...selectedFiles]);
    }
  };

  const handleDescriptionChange = useCallback((path: string, description: string) => {
    setFileImgs((prevData) => prevData.map((item) => (item.id === path ? { ...item, description } : item)));
  }, []);

  const handleDelete = useCallback((id: string) => {
    setFileImgs((prevFiles) => prevFiles.filter((file) => file.id !== id));
  }, []);

  const handleRegisterMockup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setLoading(true);

    try {
      const imageData = await uploadImageFilesToIPFS(fileImgs);

      const created = await createMockUp.mutateAsync({
        companyID: companyID,
        name: formData.get('companyName') as string,
        serviceType: formData.get('serviceType') as string,
        description: formData.get('description') as string,
        phone: formData.get('phone') as string,
        email: formData.get('email') as string,
        imageData: imageData,
      });

      form.reset();
      setCompanyID('');
      setFileImgs([]);
      router.push(`/templates/${created?.slug}`);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='flex min-h-screen items-center justify-center bg-background p-4 lg:p-8'>
        <Card className='mx-auto w-full max-w-[1400px] border-none shadow-none'>
          <CardContent className='space-y-8 p-0'>
            <div className='flex flex-col gap-8 lg:flex-row lg:gap-6'>
              {/* Form Section */}
              <div className='flex-1 rounded-lg border border-border bg-card p-6 lg:max-w-[40%]'>
                <h3 className='mb-6 text-xl font-medium text-foreground'>Form</h3>
                <form className='flex flex-col gap-6' onSubmit={handleRegisterMockup} id='mockup-form'>
                  <div>
                    <Label className='mb-2 inline-block text-sm font-medium text-foreground' htmlFor='companyID'>
                      Company Id (Slug)
                    </Label>
                    <Input
                      disabled={loading}
                      value={companyID}
                      onChange={(e) => {
                        const value = e.target.value;
                        const slug = generateSlug(value);
                        setCompanyID(slug);
                        handleSlugCheck(slug);
                      }}
                      className='h-10 border-input bg-background text-sm'
                      id='companyID'
                      name='companyID'
                      type='text'
                      placeholder='Company id must be unique'
                      required
                    />
                    {companyID && (
                      <div className='mt-1 text-sm'>
                        {isAvailable ? (
                          <span className='text-emerald-500'>Id is available</span>
                        ) : (
                          <span className='text-destructive'>Id is not available</span>
                        )}
                      </div>
                    )}
                  </div>
                  <div>
                    <Label className='mb-2 inline-block text-sm font-medium text-foreground' htmlFor='companyName'>
                      Company name
                    </Label>
                    <Input
                      disabled={loading}
                      className='h-10 border-input bg-background text-sm'
                      id='companyName'
                      name='companyName'
                      type='text'
                      placeholder='Enter your company name'
                      required
                    />
                  </div>

                  <div>
                    <Label className='mb-2 inline-block text-sm font-medium text-foreground' htmlFor='serviceType'>
                      Service type
                    </Label>
                    <Input
                      disabled={loading}
                      className='h-10 border-input bg-background text-sm'
                      id='serviceType'
                      name='serviceType'
                      type='text'
                      placeholder='What service do you provide?'
                      required
                    />
                  </div>

                  <div>
                    <Label className='mb-2 inline-block text-sm font-medium text-foreground' htmlFor='email'>
                      Email
                    </Label>
                    <Input
                      disabled={loading}
                      className='h-10 border-input bg-background text-sm'
                      id='email'
                      name='email'
                      type='email'
                      placeholder='your@email.com'
                      required
                    />
                  </div>

                  <div>
                    <Label className='mb-2 inline-block text-sm font-medium text-foreground' htmlFor='phone'>
                      Phone
                    </Label>
                    <Input
                      disabled={loading}
                      className='h-10 border-input bg-background text-sm'
                      id='phone'
                      name='phone'
                      type='text'
                      placeholder='Your phone number'
                    />
                  </div>

                  <div>
                    <Label className='mb-2 inline-block text-sm font-medium text-foreground' htmlFor='description'>
                      Description
                    </Label>
                    <Textarea
                      disabled={loading}
                      className='min-h-[12rem] resize-none border-input bg-background text-sm'
                      id='description'
                      name='description'
                      placeholder='Describe your mock-up requirements...'
                    />
                  </div>
                </form>
              </div>

              {/* Images Section */}
              <div className='flex-1 rounded-lg border border-border bg-card p-6'>
                <div className='mb-6 flex items-center justify-between'>
                  <h3 className='text-xl font-medium text-foreground'>Images</h3>
                  <Label
                    className={buttonVariants({
                      variant: 'outline',
                      size: 'default',
                      className: 'cursor-pointer',
                    })}
                    htmlFor='fileInput'
                  >
                    <span>Upload</span>
                    <input
                      disabled={loading}
                      multiple
                      required
                      accept='.svg, .png, .jpg, .jpeg'
                      className='sr-only'
                      type='file'
                      name='file'
                      id='fileInput'
                      onChange={handleFileChange}
                    />
                  </Label>
                </div>

                {fileImgs.length > 0 ? (
                  <div>
                    <ScrollArea className='h-[45rem] pr-4'>
                      <Table>
                        <TableHeader>
                          <TableRow className='border-b border-border'>
                            <TableHead className='h-10 bg-card p-0 text-sm font-medium text-foreground'>
                              Image
                            </TableHead>
                            <TableHead className='h-10 bg-card p-0 text-sm font-medium text-foreground'>Name</TableHead>
                            <TableHead className='h-10 bg-card p-0 text-sm font-medium text-foreground'>
                              Input tag
                            </TableHead>
                            <TableHead className='h-10 bg-card p-0 text-sm font-medium text-foreground'>
                              Action
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {fileImgs.map((item) => (
                            <ImageRow
                              key={item.id}
                              item={item}
                              loading={loading}
                              handleDescriptionChange={handleDescriptionChange}
                              handleDelete={handleDelete}
                            />
                          ))}
                        </TableBody>
                      </Table>
                    </ScrollArea>
                  </div>
                ) : (
                  <div className='flex h-[460px] items-center justify-center rounded-lg border border-dashed border-border bg-muted/50'>
                    <div className='text-center'>
                      <p className='text-sm text-muted-foreground'>No images uploaded yet</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Register Button */}
            <div>
              <Button
                disabled={fileImgs.length === 0 || !isAvailable || loading}
                type='submit'
                className='h-12 w-full'
                form='mockup-form'
              >
                {loading ? (
                  <div className='flex items-center gap-2'>
                    <LuLoader2 className='h-4 w-4 animate-spin' />
                    <span>Registering...</span>
                  </div>
                ) : (
                  'Register'
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {loading && <LoadingPopup />}
    </>
  );
}
