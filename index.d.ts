// This is a typescript definition file for ngStorage

declare module "ngStorage" {
  var _:string;
  export = _;
}

declare module ngStorage {
  interface IStorage {
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

  interface IStorageProvider {
    setPrefix(prefix: string): void;
  }

}
