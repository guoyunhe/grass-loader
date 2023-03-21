import { urlToRequest } from 'loader-utils';
import type { LoaderContext } from 'webpack';

let cachedGrass: any;

async function load() {
  if (!cachedGrass) {
    cachedGrass = await import('@connorskees/grass');
  }
  return cachedGrass;
}

export interface LoaderOptions {
  sourceMap: boolean;
}

export default async function (this: LoaderContext<LoaderOptions>, source: string) {
  const { from_string } = await load();
  const options = this.getOptions();

  console.log('The request path', urlToRequest(this.resourcePath));

  return from_string(source);
}
