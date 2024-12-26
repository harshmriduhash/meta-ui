import { z } from 'zod';
import { generateWebsiteConfig } from '~/lib/ai';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

const imageDataSchema = z.object({
  id: z.string(),
  path: z.string(),
  description: z.string(),
});

export const mockUpRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        companyID: z.string().min(3),
        serviceType: z.string().min(1),
        description: z.string().min(1).optional(),
        phone: z.string().optional(),
        email: z.string().email('Invalid email format'),
        imageData: z.array(imageDataSchema),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const data = await generateWebsiteConfig({
        name: input.name,
        serviceType: input.serviceType,
        description: input.description,
        phone: input.phone,
        email: input.email,
        imageData: input.imageData,
      });

      return ctx.db.mockUp.create({
        data: {
          name: input.name,
          content: data,
          slug: input.companyID,
        },
      });
    }),

  getById: publicProcedure.input(z.object({ id: z.number() })).query(async ({ ctx, input }) => {
    const mockUp = await ctx.db.mockUp.findUnique({
      where: { id: input.id },
    });

    return mockUp ?? null;
  }),

  getBySlug: publicProcedure.input(z.object({ slug: z.string() })).query(async ({ ctx, input }) => {
    const mockUp = await ctx.db.mockUp.findUnique({
      where: { slug: input.slug },
    });

    return mockUp ?? null;
  }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.mockUp.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }),

  updateStatus: publicProcedure
    .input(z.object({ value: z.boolean(), id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const mockUp = await ctx.db.mockUp.update({
        where: { id: input.id },
        data: { isEnabled: input.value },
      });

      return mockUp ?? null;
    }),
  checkSlugAvailability: publicProcedure.input(z.object({ slug: z.string() })).mutation(async ({ ctx, input }) => {
    const existingMockUp = await ctx.db.mockUp.findUnique({
      where: { slug: input.slug },
    });

    return existingMockUp === null;
  }),
});
