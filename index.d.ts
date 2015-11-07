// This is a typescript definition file for ngStorage

export interface IStorage {
  [name: string]: any;

  /**
   * Set some default values of the storage
   */
  $default(items: any): void;

  /**
   * Resets the values of the items to the defaults
   */
  $reset(items: any): void;
}

export interface IStorageProvider {
  setPrefix(newPrefix: string): void;
}

declare let moduleName: string;
export default moduleName;
