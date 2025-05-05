export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-04-28'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'default_dataset';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'default_project_id';

if (!projectId) {
  throw new Error("Configuration must contain `projectId`");
}
