/// <reference types="vite-plugin-svgr/client" />

import type { CamelCasedProperties } from "type-fest";
import { ErrorInfo } from "react";

interface LayoutProps {
  children: JSX.Element;
}

interface ErrorBoundaryProps {
  children: JSX.Element;
}

interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

declare module "@mui/material/styles" {
  interface Palette {
    colors: CamelCasedProperties<any>;
  }

  interface PaletteOptions {
    colors: CamelCasedProperties<any>;
  }
}
