/*
 * This file is automatically generated.
 * Run 'pnpm run generate:locales' to update.
 */

import { Faker } from '../faker';
import en from '../locales/en';
import lv from '../locales/lv';

const faker = new Faker({
  locale: 'lv',
  localeFallback: 'en',
  locales: {
    lv,
    en,
  },
});

export = faker;