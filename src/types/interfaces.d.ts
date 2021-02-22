export interface IStorage {
    get: (list_name: string) => Promise<string[]>;
    add: (list_name: string, item: string) => Promise<boolean>;
    remove: (list_name: string, item: string) => Promise<boolean>;
}
