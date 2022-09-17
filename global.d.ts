declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.wav" {
  const value: any;
  export = value;
}

declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}
