import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfigFactory } from './app/app.config';
import { Config } from './models/config';
import { InjectionToken } from '@angular/core';

export const CONFIG = new InjectionToken<Config>('config');

const preBootstrap = async (): Promise<[Config]> => {
  const response = await fetch("config.json");
  const config = await response.json();
  return Promise.resolve([config]);
};

preBootstrap()
  .then(([config]) => bootstrapApplication(App, appConfigFactory(config)))
  .catch((err) => console.error(err));
