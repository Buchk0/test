interface ImportMetaEnv {
    readonly VITE_NEWS_API_KEY: string; // завжди є
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}