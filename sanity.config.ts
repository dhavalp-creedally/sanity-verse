'use client';

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/studio/schemaTypes'
import { clientEnv } from './src/env/clientEnv';
import { structure } from './src/studio/structure';

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'CreedAlly Studio',

  projectId: clientEnv.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: clientEnv.NEXT_PUBLIC_SANITY_DATASET,

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
