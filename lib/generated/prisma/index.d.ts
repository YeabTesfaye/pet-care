
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ServiceCategory
 * 
 */
export type ServiceCategory = $Result.DefaultSelection<Prisma.$ServiceCategoryPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Discussion
 * 
 */
export type Discussion = $Result.DefaultSelection<Prisma.$DiscussionPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Resource
 * 
 */
export type Resource = $Result.DefaultSelection<Prisma.$ResourcePayload>
/**
 * Model Expert
 * 
 */
export type Expert = $Result.DefaultSelection<Prisma.$ExpertPayload>
/**
 * Model LostFoundPet
 * 
 */
export type LostFoundPet = $Result.DefaultSelection<Prisma.$LostFoundPetPayload>
/**
 * Model SuccessStory
 * 
 */
export type SuccessStory = $Result.DefaultSelection<Prisma.$SuccessStoryPayload>
/**
 * Model ResourceCategory
 * 
 */
export type ResourceCategory = $Result.DefaultSelection<Prisma.$ResourceCategoryPayload>
/**
 * Model InteractiveTool
 * 
 */
export type InteractiveTool = $Result.DefaultSelection<Prisma.$InteractiveToolPayload>
/**
 * Model DownloadableResource
 * 
 */
export type DownloadableResource = $Result.DefaultSelection<Prisma.$DownloadableResourcePayload>
/**
 * Model ShopCategory
 * 
 */
export type ShopCategory = $Result.DefaultSelection<Prisma.$ShopCategoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PetStatus: {
  LOST: 'LOST',
  FOUND: 'FOUND'
};

export type PetStatus = (typeof PetStatus)[keyof typeof PetStatus]

}

export type PetStatus = $Enums.PetStatus

export const PetStatus: typeof $Enums.PetStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceCategory`: Exposes CRUD operations for the **ServiceCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceCategories
    * const serviceCategories = await prisma.serviceCategory.findMany()
    * ```
    */
  get serviceCategory(): Prisma.ServiceCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discussion`: Exposes CRUD operations for the **Discussion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Discussions
    * const discussions = await prisma.discussion.findMany()
    * ```
    */
  get discussion(): Prisma.DiscussionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resource`: Exposes CRUD operations for the **Resource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resources
    * const resources = await prisma.resource.findMany()
    * ```
    */
  get resource(): Prisma.ResourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expert`: Exposes CRUD operations for the **Expert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experts
    * const experts = await prisma.expert.findMany()
    * ```
    */
  get expert(): Prisma.ExpertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lostFoundPet`: Exposes CRUD operations for the **LostFoundPet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LostFoundPets
    * const lostFoundPets = await prisma.lostFoundPet.findMany()
    * ```
    */
  get lostFoundPet(): Prisma.LostFoundPetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.successStory`: Exposes CRUD operations for the **SuccessStory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SuccessStories
    * const successStories = await prisma.successStory.findMany()
    * ```
    */
  get successStory(): Prisma.SuccessStoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resourceCategory`: Exposes CRUD operations for the **ResourceCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResourceCategories
    * const resourceCategories = await prisma.resourceCategory.findMany()
    * ```
    */
  get resourceCategory(): Prisma.ResourceCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interactiveTool`: Exposes CRUD operations for the **InteractiveTool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InteractiveTools
    * const interactiveTools = await prisma.interactiveTool.findMany()
    * ```
    */
  get interactiveTool(): Prisma.InteractiveToolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.downloadableResource`: Exposes CRUD operations for the **DownloadableResource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DownloadableResources
    * const downloadableResources = await prisma.downloadableResource.findMany()
    * ```
    */
  get downloadableResource(): Prisma.DownloadableResourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shopCategory`: Exposes CRUD operations for the **ShopCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShopCategories
    * const shopCategories = await prisma.shopCategory.findMany()
    * ```
    */
  get shopCategory(): Prisma.ShopCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ServiceCategory: 'ServiceCategory',
    Service: 'Service',
    Discussion: 'Discussion',
    Event: 'Event',
    Resource: 'Resource',
    Expert: 'Expert',
    LostFoundPet: 'LostFoundPet',
    SuccessStory: 'SuccessStory',
    ResourceCategory: 'ResourceCategory',
    InteractiveTool: 'InteractiveTool',
    DownloadableResource: 'DownloadableResource',
    ShopCategory: 'ShopCategory',
    Product: 'Product'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "serviceCategory" | "service" | "discussion" | "event" | "resource" | "expert" | "lostFoundPet" | "successStory" | "resourceCategory" | "interactiveTool" | "downloadableResource" | "shopCategory" | "product"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ServiceCategory: {
        payload: Prisma.$ServiceCategoryPayload<ExtArgs>
        fields: Prisma.ServiceCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          findFirst: {
            args: Prisma.ServiceCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          findMany: {
            args: Prisma.ServiceCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>[]
          }
          create: {
            args: Prisma.ServiceCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          createMany: {
            args: Prisma.ServiceCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServiceCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          update: {
            args: Prisma.ServiceCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ServiceCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          aggregate: {
            args: Prisma.ServiceCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceCategory>
          }
          groupBy: {
            args: Prisma.ServiceCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceCategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ServiceCategoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ServiceCategoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ServiceCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCategoryCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ServiceFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ServiceAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Discussion: {
        payload: Prisma.$DiscussionPayload<ExtArgs>
        fields: Prisma.DiscussionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscussionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscussionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          findFirst: {
            args: Prisma.DiscussionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscussionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          findMany: {
            args: Prisma.DiscussionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>[]
          }
          create: {
            args: Prisma.DiscussionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          createMany: {
            args: Prisma.DiscussionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DiscussionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          update: {
            args: Prisma.DiscussionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          deleteMany: {
            args: Prisma.DiscussionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscussionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiscussionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          aggregate: {
            args: Prisma.DiscussionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscussion>
          }
          groupBy: {
            args: Prisma.DiscussionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscussionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DiscussionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DiscussionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DiscussionCountArgs<ExtArgs>
            result: $Utils.Optional<DiscussionCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EventFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EventAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Resource: {
        payload: Prisma.$ResourcePayload<ExtArgs>
        fields: Prisma.ResourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findFirst: {
            args: Prisma.ResourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findMany: {
            args: Prisma.ResourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          create: {
            args: Prisma.ResourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          createMany: {
            args: Prisma.ResourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ResourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          update: {
            args: Prisma.ResourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          deleteMany: {
            args: Prisma.ResourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          aggregate: {
            args: Prisma.ResourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResource>
          }
          groupBy: {
            args: Prisma.ResourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResourceGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ResourceFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ResourceAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ResourceCountArgs<ExtArgs>
            result: $Utils.Optional<ResourceCountAggregateOutputType> | number
          }
        }
      }
      Expert: {
        payload: Prisma.$ExpertPayload<ExtArgs>
        fields: Prisma.ExpertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          findFirst: {
            args: Prisma.ExpertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          findMany: {
            args: Prisma.ExpertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>[]
          }
          create: {
            args: Prisma.ExpertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          createMany: {
            args: Prisma.ExpertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExpertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          update: {
            args: Prisma.ExpertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          deleteMany: {
            args: Prisma.ExpertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExpertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          aggregate: {
            args: Prisma.ExpertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpert>
          }
          groupBy: {
            args: Prisma.ExpertGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpertGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ExpertFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ExpertAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ExpertCountArgs<ExtArgs>
            result: $Utils.Optional<ExpertCountAggregateOutputType> | number
          }
        }
      }
      LostFoundPet: {
        payload: Prisma.$LostFoundPetPayload<ExtArgs>
        fields: Prisma.LostFoundPetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LostFoundPetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostFoundPetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LostFoundPetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostFoundPetPayload>
          }
          findFirst: {
            args: Prisma.LostFoundPetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostFoundPetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LostFoundPetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostFoundPetPayload>
          }
          findMany: {
            args: Prisma.LostFoundPetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostFoundPetPayload>[]
          }
          create: {
            args: Prisma.LostFoundPetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostFoundPetPayload>
          }
          createMany: {
            args: Prisma.LostFoundPetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LostFoundPetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostFoundPetPayload>
          }
          update: {
            args: Prisma.LostFoundPetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostFoundPetPayload>
          }
          deleteMany: {
            args: Prisma.LostFoundPetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LostFoundPetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LostFoundPetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LostFoundPetPayload>
          }
          aggregate: {
            args: Prisma.LostFoundPetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLostFoundPet>
          }
          groupBy: {
            args: Prisma.LostFoundPetGroupByArgs<ExtArgs>
            result: $Utils.Optional<LostFoundPetGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LostFoundPetFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LostFoundPetAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LostFoundPetCountArgs<ExtArgs>
            result: $Utils.Optional<LostFoundPetCountAggregateOutputType> | number
          }
        }
      }
      SuccessStory: {
        payload: Prisma.$SuccessStoryPayload<ExtArgs>
        fields: Prisma.SuccessStoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuccessStoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessStoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuccessStoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessStoryPayload>
          }
          findFirst: {
            args: Prisma.SuccessStoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessStoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuccessStoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessStoryPayload>
          }
          findMany: {
            args: Prisma.SuccessStoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessStoryPayload>[]
          }
          create: {
            args: Prisma.SuccessStoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessStoryPayload>
          }
          createMany: {
            args: Prisma.SuccessStoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SuccessStoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessStoryPayload>
          }
          update: {
            args: Prisma.SuccessStoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessStoryPayload>
          }
          deleteMany: {
            args: Prisma.SuccessStoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuccessStoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SuccessStoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessStoryPayload>
          }
          aggregate: {
            args: Prisma.SuccessStoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuccessStory>
          }
          groupBy: {
            args: Prisma.SuccessStoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuccessStoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SuccessStoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SuccessStoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SuccessStoryCountArgs<ExtArgs>
            result: $Utils.Optional<SuccessStoryCountAggregateOutputType> | number
          }
        }
      }
      ResourceCategory: {
        payload: Prisma.$ResourceCategoryPayload<ExtArgs>
        fields: Prisma.ResourceCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceCategoryPayload>
          }
          findFirst: {
            args: Prisma.ResourceCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceCategoryPayload>
          }
          findMany: {
            args: Prisma.ResourceCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceCategoryPayload>[]
          }
          create: {
            args: Prisma.ResourceCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceCategoryPayload>
          }
          createMany: {
            args: Prisma.ResourceCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ResourceCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceCategoryPayload>
          }
          update: {
            args: Prisma.ResourceCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ResourceCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResourceCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceCategoryPayload>
          }
          aggregate: {
            args: Prisma.ResourceCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResourceCategory>
          }
          groupBy: {
            args: Prisma.ResourceCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResourceCategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ResourceCategoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ResourceCategoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ResourceCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ResourceCategoryCountAggregateOutputType> | number
          }
        }
      }
      InteractiveTool: {
        payload: Prisma.$InteractiveToolPayload<ExtArgs>
        fields: Prisma.InteractiveToolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InteractiveToolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractiveToolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InteractiveToolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractiveToolPayload>
          }
          findFirst: {
            args: Prisma.InteractiveToolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractiveToolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InteractiveToolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractiveToolPayload>
          }
          findMany: {
            args: Prisma.InteractiveToolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractiveToolPayload>[]
          }
          create: {
            args: Prisma.InteractiveToolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractiveToolPayload>
          }
          createMany: {
            args: Prisma.InteractiveToolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InteractiveToolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractiveToolPayload>
          }
          update: {
            args: Prisma.InteractiveToolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractiveToolPayload>
          }
          deleteMany: {
            args: Prisma.InteractiveToolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InteractiveToolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InteractiveToolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractiveToolPayload>
          }
          aggregate: {
            args: Prisma.InteractiveToolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInteractiveTool>
          }
          groupBy: {
            args: Prisma.InteractiveToolGroupByArgs<ExtArgs>
            result: $Utils.Optional<InteractiveToolGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.InteractiveToolFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.InteractiveToolAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.InteractiveToolCountArgs<ExtArgs>
            result: $Utils.Optional<InteractiveToolCountAggregateOutputType> | number
          }
        }
      }
      DownloadableResource: {
        payload: Prisma.$DownloadableResourcePayload<ExtArgs>
        fields: Prisma.DownloadableResourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DownloadableResourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadableResourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DownloadableResourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadableResourcePayload>
          }
          findFirst: {
            args: Prisma.DownloadableResourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadableResourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DownloadableResourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadableResourcePayload>
          }
          findMany: {
            args: Prisma.DownloadableResourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadableResourcePayload>[]
          }
          create: {
            args: Prisma.DownloadableResourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadableResourcePayload>
          }
          createMany: {
            args: Prisma.DownloadableResourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DownloadableResourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadableResourcePayload>
          }
          update: {
            args: Prisma.DownloadableResourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadableResourcePayload>
          }
          deleteMany: {
            args: Prisma.DownloadableResourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DownloadableResourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DownloadableResourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadableResourcePayload>
          }
          aggregate: {
            args: Prisma.DownloadableResourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDownloadableResource>
          }
          groupBy: {
            args: Prisma.DownloadableResourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DownloadableResourceGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DownloadableResourceFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DownloadableResourceAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DownloadableResourceCountArgs<ExtArgs>
            result: $Utils.Optional<DownloadableResourceCountAggregateOutputType> | number
          }
        }
      }
      ShopCategory: {
        payload: Prisma.$ShopCategoryPayload<ExtArgs>
        fields: Prisma.ShopCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopCategoryPayload>
          }
          findFirst: {
            args: Prisma.ShopCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopCategoryPayload>
          }
          findMany: {
            args: Prisma.ShopCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopCategoryPayload>[]
          }
          create: {
            args: Prisma.ShopCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopCategoryPayload>
          }
          createMany: {
            args: Prisma.ShopCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShopCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopCategoryPayload>
          }
          update: {
            args: Prisma.ShopCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ShopCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShopCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopCategoryPayload>
          }
          aggregate: {
            args: Prisma.ShopCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShopCategory>
          }
          groupBy: {
            args: Prisma.ShopCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopCategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ShopCategoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ShopCategoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ShopCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ShopCategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProductFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProductAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    serviceCategory?: ServiceCategoryOmit
    service?: ServiceOmit
    discussion?: DiscussionOmit
    event?: EventOmit
    resource?: ResourceOmit
    expert?: ExpertOmit
    lostFoundPet?: LostFoundPetOmit
    successStory?: SuccessStoryOmit
    resourceCategory?: ResourceCategoryOmit
    interactiveTool?: InteractiveToolOmit
    downloadableResource?: DownloadableResourceOmit
    shopCategory?: ShopCategoryOmit
    product?: ProductOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    role: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    role: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    email: number
    role: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    username: string
    email: string
    role: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "email" | "role" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      username: string
      email: string
      role: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model ServiceCategory
   */

  export type AggregateServiceCategory = {
    _count: ServiceCategoryCountAggregateOutputType | null
    _min: ServiceCategoryMinAggregateOutputType | null
    _max: ServiceCategoryMaxAggregateOutputType | null
  }

  export type ServiceCategoryMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
  }

  export type ServiceCategoryMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
  }

  export type ServiceCategoryCountAggregateOutputType = {
    id: number
    title: number
    description: number
    _all: number
  }


  export type ServiceCategoryMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
  }

  export type ServiceCategoryMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
  }

  export type ServiceCategoryCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    _all?: true
  }

  export type ServiceCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceCategory to aggregate.
     */
    where?: ServiceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCategories to fetch.
     */
    orderBy?: ServiceCategoryOrderByWithRelationInput | ServiceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceCategories
    **/
    _count?: true | ServiceCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceCategoryMaxAggregateInputType
  }

  export type GetServiceCategoryAggregateType<T extends ServiceCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceCategory[P]>
      : GetScalarType<T[P], AggregateServiceCategory[P]>
  }




  export type ServiceCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceCategoryWhereInput
    orderBy?: ServiceCategoryOrderByWithAggregationInput | ServiceCategoryOrderByWithAggregationInput[]
    by: ServiceCategoryScalarFieldEnum[] | ServiceCategoryScalarFieldEnum
    having?: ServiceCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCategoryCountAggregateInputType | true
    _min?: ServiceCategoryMinAggregateInputType
    _max?: ServiceCategoryMaxAggregateInputType
  }

  export type ServiceCategoryGroupByOutputType = {
    id: string
    title: string
    description: string
    _count: ServiceCategoryCountAggregateOutputType | null
    _min: ServiceCategoryMinAggregateOutputType | null
    _max: ServiceCategoryMaxAggregateOutputType | null
  }

  type GetServiceCategoryGroupByPayload<T extends ServiceCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ServiceCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
  }, ExtArgs["result"]["serviceCategory"]>



  export type ServiceCategorySelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
  }

  export type ServiceCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description", ExtArgs["result"]["serviceCategory"]>

  export type $ServiceCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceCategory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
    }, ExtArgs["result"]["serviceCategory"]>
    composites: {}
  }

  type ServiceCategoryGetPayload<S extends boolean | null | undefined | ServiceCategoryDefaultArgs> = $Result.GetResult<Prisma.$ServiceCategoryPayload, S>

  type ServiceCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCategoryCountAggregateInputType | true
    }

  export interface ServiceCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceCategory'], meta: { name: 'ServiceCategory' } }
    /**
     * Find zero or one ServiceCategory that matches the filter.
     * @param {ServiceCategoryFindUniqueArgs} args - Arguments to find a ServiceCategory
     * @example
     * // Get one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceCategoryFindUniqueArgs>(args: SelectSubset<T, ServiceCategoryFindUniqueArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceCategoryFindUniqueOrThrowArgs} args - Arguments to find a ServiceCategory
     * @example
     * // Get one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryFindFirstArgs} args - Arguments to find a ServiceCategory
     * @example
     * // Get one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceCategoryFindFirstArgs>(args?: SelectSubset<T, ServiceCategoryFindFirstArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryFindFirstOrThrowArgs} args - Arguments to find a ServiceCategory
     * @example
     * // Get one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceCategories
     * const serviceCategories = await prisma.serviceCategory.findMany()
     * 
     * // Get first 10 ServiceCategories
     * const serviceCategories = await prisma.serviceCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceCategoryWithIdOnly = await prisma.serviceCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceCategoryFindManyArgs>(args?: SelectSubset<T, ServiceCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceCategory.
     * @param {ServiceCategoryCreateArgs} args - Arguments to create a ServiceCategory.
     * @example
     * // Create one ServiceCategory
     * const ServiceCategory = await prisma.serviceCategory.create({
     *   data: {
     *     // ... data to create a ServiceCategory
     *   }
     * })
     * 
     */
    create<T extends ServiceCategoryCreateArgs>(args: SelectSubset<T, ServiceCategoryCreateArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceCategories.
     * @param {ServiceCategoryCreateManyArgs} args - Arguments to create many ServiceCategories.
     * @example
     * // Create many ServiceCategories
     * const serviceCategory = await prisma.serviceCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCategoryCreateManyArgs>(args?: SelectSubset<T, ServiceCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ServiceCategory.
     * @param {ServiceCategoryDeleteArgs} args - Arguments to delete one ServiceCategory.
     * @example
     * // Delete one ServiceCategory
     * const ServiceCategory = await prisma.serviceCategory.delete({
     *   where: {
     *     // ... filter to delete one ServiceCategory
     *   }
     * })
     * 
     */
    delete<T extends ServiceCategoryDeleteArgs>(args: SelectSubset<T, ServiceCategoryDeleteArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceCategory.
     * @param {ServiceCategoryUpdateArgs} args - Arguments to update one ServiceCategory.
     * @example
     * // Update one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceCategoryUpdateArgs>(args: SelectSubset<T, ServiceCategoryUpdateArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceCategories.
     * @param {ServiceCategoryDeleteManyArgs} args - Arguments to filter ServiceCategories to delete.
     * @example
     * // Delete a few ServiceCategories
     * const { count } = await prisma.serviceCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceCategoryDeleteManyArgs>(args?: SelectSubset<T, ServiceCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceCategories
     * const serviceCategory = await prisma.serviceCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceCategoryUpdateManyArgs>(args: SelectSubset<T, ServiceCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceCategory.
     * @param {ServiceCategoryUpsertArgs} args - Arguments to update or create a ServiceCategory.
     * @example
     * // Update or create a ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.upsert({
     *   create: {
     *     // ... data to create a ServiceCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceCategory we want to update
     *   }
     * })
     */
    upsert<T extends ServiceCategoryUpsertArgs>(args: SelectSubset<T, ServiceCategoryUpsertArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceCategories that matches the filter.
     * @param {ServiceCategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const serviceCategory = await prisma.serviceCategory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ServiceCategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ServiceCategory.
     * @param {ServiceCategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const serviceCategory = await prisma.serviceCategory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ServiceCategoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ServiceCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryCountArgs} args - Arguments to filter ServiceCategories to count.
     * @example
     * // Count the number of ServiceCategories
     * const count = await prisma.serviceCategory.count({
     *   where: {
     *     // ... the filter for the ServiceCategories we want to count
     *   }
     * })
    **/
    count<T extends ServiceCategoryCountArgs>(
      args?: Subset<T, ServiceCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceCategoryAggregateArgs>(args: Subset<T, ServiceCategoryAggregateArgs>): Prisma.PrismaPromise<GetServiceCategoryAggregateType<T>>

    /**
     * Group by ServiceCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ServiceCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceCategory model
   */
  readonly fields: ServiceCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceCategory model
   */
  interface ServiceCategoryFieldRefs {
    readonly id: FieldRef<"ServiceCategory", 'String'>
    readonly title: FieldRef<"ServiceCategory", 'String'>
    readonly description: FieldRef<"ServiceCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ServiceCategory findUnique
   */
  export type ServiceCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ServiceCategory to fetch.
     */
    where: ServiceCategoryWhereUniqueInput
  }

  /**
   * ServiceCategory findUniqueOrThrow
   */
  export type ServiceCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ServiceCategory to fetch.
     */
    where: ServiceCategoryWhereUniqueInput
  }

  /**
   * ServiceCategory findFirst
   */
  export type ServiceCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ServiceCategory to fetch.
     */
    where?: ServiceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCategories to fetch.
     */
    orderBy?: ServiceCategoryOrderByWithRelationInput | ServiceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceCategories.
     */
    cursor?: ServiceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceCategories.
     */
    distinct?: ServiceCategoryScalarFieldEnum | ServiceCategoryScalarFieldEnum[]
  }

  /**
   * ServiceCategory findFirstOrThrow
   */
  export type ServiceCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ServiceCategory to fetch.
     */
    where?: ServiceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCategories to fetch.
     */
    orderBy?: ServiceCategoryOrderByWithRelationInput | ServiceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceCategories.
     */
    cursor?: ServiceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceCategories.
     */
    distinct?: ServiceCategoryScalarFieldEnum | ServiceCategoryScalarFieldEnum[]
  }

  /**
   * ServiceCategory findMany
   */
  export type ServiceCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ServiceCategories to fetch.
     */
    where?: ServiceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCategories to fetch.
     */
    orderBy?: ServiceCategoryOrderByWithRelationInput | ServiceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceCategories.
     */
    cursor?: ServiceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCategories.
     */
    skip?: number
    distinct?: ServiceCategoryScalarFieldEnum | ServiceCategoryScalarFieldEnum[]
  }

  /**
   * ServiceCategory create
   */
  export type ServiceCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * The data needed to create a ServiceCategory.
     */
    data: XOR<ServiceCategoryCreateInput, ServiceCategoryUncheckedCreateInput>
  }

  /**
   * ServiceCategory createMany
   */
  export type ServiceCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceCategories.
     */
    data: ServiceCategoryCreateManyInput | ServiceCategoryCreateManyInput[]
  }

  /**
   * ServiceCategory update
   */
  export type ServiceCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * The data needed to update a ServiceCategory.
     */
    data: XOR<ServiceCategoryUpdateInput, ServiceCategoryUncheckedUpdateInput>
    /**
     * Choose, which ServiceCategory to update.
     */
    where: ServiceCategoryWhereUniqueInput
  }

  /**
   * ServiceCategory updateMany
   */
  export type ServiceCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceCategories.
     */
    data: XOR<ServiceCategoryUpdateManyMutationInput, ServiceCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ServiceCategories to update
     */
    where?: ServiceCategoryWhereInput
    /**
     * Limit how many ServiceCategories to update.
     */
    limit?: number
  }

  /**
   * ServiceCategory upsert
   */
  export type ServiceCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * The filter to search for the ServiceCategory to update in case it exists.
     */
    where: ServiceCategoryWhereUniqueInput
    /**
     * In case the ServiceCategory found by the `where` argument doesn't exist, create a new ServiceCategory with this data.
     */
    create: XOR<ServiceCategoryCreateInput, ServiceCategoryUncheckedCreateInput>
    /**
     * In case the ServiceCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceCategoryUpdateInput, ServiceCategoryUncheckedUpdateInput>
  }

  /**
   * ServiceCategory delete
   */
  export type ServiceCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Filter which ServiceCategory to delete.
     */
    where: ServiceCategoryWhereUniqueInput
  }

  /**
   * ServiceCategory deleteMany
   */
  export type ServiceCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceCategories to delete
     */
    where?: ServiceCategoryWhereInput
    /**
     * Limit how many ServiceCategories to delete.
     */
    limit?: number
  }

  /**
   * ServiceCategory findRaw
   */
  export type ServiceCategoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ServiceCategory aggregateRaw
   */
  export type ServiceCategoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ServiceCategory without action
   */
  export type ServiceCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    pricing: string | null
    duration: string | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    pricing: string | null
    duration: string | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    title: number
    description: number
    details: number
    pricing: number
    duration: number
    image: number
    _all: number
  }


  export type ServiceMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    pricing?: true
    duration?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    pricing?: true
    duration?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    details?: true
    pricing?: true
    duration?: true
    image?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    title: string
    description: string
    details: string[]
    pricing: string
    duration: string
    image: string[]
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    details?: boolean
    pricing?: boolean
    duration?: boolean
    image?: boolean
  }, ExtArgs["result"]["service"]>



  export type ServiceSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    details?: boolean
    pricing?: boolean
    duration?: boolean
    image?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "details" | "pricing" | "duration" | "image", ExtArgs["result"]["service"]>

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      details: string[]
      pricing: string
      duration: string
      image: string[]
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * @param {ServiceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const service = await prisma.service.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ServiceFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Service.
     * @param {ServiceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const service = await prisma.service.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ServiceAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly title: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly details: FieldRef<"Service", 'String[]'>
    readonly pricing: FieldRef<"Service", 'String'>
    readonly duration: FieldRef<"Service", 'String'>
    readonly image: FieldRef<"Service", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service findRaw
   */
  export type ServiceFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Service aggregateRaw
   */
  export type ServiceAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
  }


  /**
   * Model Discussion
   */

  export type AggregateDiscussion = {
    _count: DiscussionCountAggregateOutputType | null
    _avg: DiscussionAvgAggregateOutputType | null
    _sum: DiscussionSumAggregateOutputType | null
    _min: DiscussionMinAggregateOutputType | null
    _max: DiscussionMaxAggregateOutputType | null
  }

  export type DiscussionAvgAggregateOutputType = {
    replies: number | null
    views: number | null
  }

  export type DiscussionSumAggregateOutputType = {
    replies: number | null
    views: number | null
  }

  export type DiscussionMinAggregateOutputType = {
    id: string | null
    title: string | null
    category: string | null
    author: string | null
    avatar: string | null
    replies: number | null
    views: number | null
    timeAgo: string | null
    hot: boolean | null
    createdAt: Date | null
  }

  export type DiscussionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    category: string | null
    author: string | null
    avatar: string | null
    replies: number | null
    views: number | null
    timeAgo: string | null
    hot: boolean | null
    createdAt: Date | null
  }

  export type DiscussionCountAggregateOutputType = {
    id: number
    title: number
    category: number
    author: number
    avatar: number
    replies: number
    views: number
    timeAgo: number
    hot: number
    createdAt: number
    _all: number
  }


  export type DiscussionAvgAggregateInputType = {
    replies?: true
    views?: true
  }

  export type DiscussionSumAggregateInputType = {
    replies?: true
    views?: true
  }

  export type DiscussionMinAggregateInputType = {
    id?: true
    title?: true
    category?: true
    author?: true
    avatar?: true
    replies?: true
    views?: true
    timeAgo?: true
    hot?: true
    createdAt?: true
  }

  export type DiscussionMaxAggregateInputType = {
    id?: true
    title?: true
    category?: true
    author?: true
    avatar?: true
    replies?: true
    views?: true
    timeAgo?: true
    hot?: true
    createdAt?: true
  }

  export type DiscussionCountAggregateInputType = {
    id?: true
    title?: true
    category?: true
    author?: true
    avatar?: true
    replies?: true
    views?: true
    timeAgo?: true
    hot?: true
    createdAt?: true
    _all?: true
  }

  export type DiscussionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discussion to aggregate.
     */
    where?: DiscussionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discussions to fetch.
     */
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscussionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discussions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Discussions
    **/
    _count?: true | DiscussionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiscussionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiscussionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscussionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscussionMaxAggregateInputType
  }

  export type GetDiscussionAggregateType<T extends DiscussionAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscussion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscussion[P]>
      : GetScalarType<T[P], AggregateDiscussion[P]>
  }




  export type DiscussionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscussionWhereInput
    orderBy?: DiscussionOrderByWithAggregationInput | DiscussionOrderByWithAggregationInput[]
    by: DiscussionScalarFieldEnum[] | DiscussionScalarFieldEnum
    having?: DiscussionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscussionCountAggregateInputType | true
    _avg?: DiscussionAvgAggregateInputType
    _sum?: DiscussionSumAggregateInputType
    _min?: DiscussionMinAggregateInputType
    _max?: DiscussionMaxAggregateInputType
  }

  export type DiscussionGroupByOutputType = {
    id: string
    title: string
    category: string
    author: string
    avatar: string | null
    replies: number
    views: number
    timeAgo: string
    hot: boolean
    createdAt: Date
    _count: DiscussionCountAggregateOutputType | null
    _avg: DiscussionAvgAggregateOutputType | null
    _sum: DiscussionSumAggregateOutputType | null
    _min: DiscussionMinAggregateOutputType | null
    _max: DiscussionMaxAggregateOutputType | null
  }

  type GetDiscussionGroupByPayload<T extends DiscussionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscussionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscussionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscussionGroupByOutputType[P]>
            : GetScalarType<T[P], DiscussionGroupByOutputType[P]>
        }
      >
    >


  export type DiscussionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    author?: boolean
    avatar?: boolean
    replies?: boolean
    views?: boolean
    timeAgo?: boolean
    hot?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["discussion"]>



  export type DiscussionSelectScalar = {
    id?: boolean
    title?: boolean
    category?: boolean
    author?: boolean
    avatar?: boolean
    replies?: boolean
    views?: boolean
    timeAgo?: boolean
    hot?: boolean
    createdAt?: boolean
  }

  export type DiscussionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "category" | "author" | "avatar" | "replies" | "views" | "timeAgo" | "hot" | "createdAt", ExtArgs["result"]["discussion"]>

  export type $DiscussionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Discussion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      category: string
      author: string
      avatar: string | null
      replies: number
      views: number
      timeAgo: string
      hot: boolean
      createdAt: Date
    }, ExtArgs["result"]["discussion"]>
    composites: {}
  }

  type DiscussionGetPayload<S extends boolean | null | undefined | DiscussionDefaultArgs> = $Result.GetResult<Prisma.$DiscussionPayload, S>

  type DiscussionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscussionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscussionCountAggregateInputType | true
    }

  export interface DiscussionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Discussion'], meta: { name: 'Discussion' } }
    /**
     * Find zero or one Discussion that matches the filter.
     * @param {DiscussionFindUniqueArgs} args - Arguments to find a Discussion
     * @example
     * // Get one Discussion
     * const discussion = await prisma.discussion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscussionFindUniqueArgs>(args: SelectSubset<T, DiscussionFindUniqueArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Discussion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscussionFindUniqueOrThrowArgs} args - Arguments to find a Discussion
     * @example
     * // Get one Discussion
     * const discussion = await prisma.discussion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscussionFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscussionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discussion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionFindFirstArgs} args - Arguments to find a Discussion
     * @example
     * // Get one Discussion
     * const discussion = await prisma.discussion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscussionFindFirstArgs>(args?: SelectSubset<T, DiscussionFindFirstArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discussion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionFindFirstOrThrowArgs} args - Arguments to find a Discussion
     * @example
     * // Get one Discussion
     * const discussion = await prisma.discussion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscussionFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscussionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Discussions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Discussions
     * const discussions = await prisma.discussion.findMany()
     * 
     * // Get first 10 Discussions
     * const discussions = await prisma.discussion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discussionWithIdOnly = await prisma.discussion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscussionFindManyArgs>(args?: SelectSubset<T, DiscussionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Discussion.
     * @param {DiscussionCreateArgs} args - Arguments to create a Discussion.
     * @example
     * // Create one Discussion
     * const Discussion = await prisma.discussion.create({
     *   data: {
     *     // ... data to create a Discussion
     *   }
     * })
     * 
     */
    create<T extends DiscussionCreateArgs>(args: SelectSubset<T, DiscussionCreateArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Discussions.
     * @param {DiscussionCreateManyArgs} args - Arguments to create many Discussions.
     * @example
     * // Create many Discussions
     * const discussion = await prisma.discussion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscussionCreateManyArgs>(args?: SelectSubset<T, DiscussionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Discussion.
     * @param {DiscussionDeleteArgs} args - Arguments to delete one Discussion.
     * @example
     * // Delete one Discussion
     * const Discussion = await prisma.discussion.delete({
     *   where: {
     *     // ... filter to delete one Discussion
     *   }
     * })
     * 
     */
    delete<T extends DiscussionDeleteArgs>(args: SelectSubset<T, DiscussionDeleteArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Discussion.
     * @param {DiscussionUpdateArgs} args - Arguments to update one Discussion.
     * @example
     * // Update one Discussion
     * const discussion = await prisma.discussion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscussionUpdateArgs>(args: SelectSubset<T, DiscussionUpdateArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Discussions.
     * @param {DiscussionDeleteManyArgs} args - Arguments to filter Discussions to delete.
     * @example
     * // Delete a few Discussions
     * const { count } = await prisma.discussion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscussionDeleteManyArgs>(args?: SelectSubset<T, DiscussionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discussions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Discussions
     * const discussion = await prisma.discussion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscussionUpdateManyArgs>(args: SelectSubset<T, DiscussionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Discussion.
     * @param {DiscussionUpsertArgs} args - Arguments to update or create a Discussion.
     * @example
     * // Update or create a Discussion
     * const discussion = await prisma.discussion.upsert({
     *   create: {
     *     // ... data to create a Discussion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discussion we want to update
     *   }
     * })
     */
    upsert<T extends DiscussionUpsertArgs>(args: SelectSubset<T, DiscussionUpsertArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Discussions that matches the filter.
     * @param {DiscussionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const discussion = await prisma.discussion.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DiscussionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Discussion.
     * @param {DiscussionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const discussion = await prisma.discussion.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DiscussionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Discussions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionCountArgs} args - Arguments to filter Discussions to count.
     * @example
     * // Count the number of Discussions
     * const count = await prisma.discussion.count({
     *   where: {
     *     // ... the filter for the Discussions we want to count
     *   }
     * })
    **/
    count<T extends DiscussionCountArgs>(
      args?: Subset<T, DiscussionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscussionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Discussion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiscussionAggregateArgs>(args: Subset<T, DiscussionAggregateArgs>): Prisma.PrismaPromise<GetDiscussionAggregateType<T>>

    /**
     * Group by Discussion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiscussionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscussionGroupByArgs['orderBy'] }
        : { orderBy?: DiscussionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiscussionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscussionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Discussion model
   */
  readonly fields: DiscussionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Discussion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscussionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Discussion model
   */
  interface DiscussionFieldRefs {
    readonly id: FieldRef<"Discussion", 'String'>
    readonly title: FieldRef<"Discussion", 'String'>
    readonly category: FieldRef<"Discussion", 'String'>
    readonly author: FieldRef<"Discussion", 'String'>
    readonly avatar: FieldRef<"Discussion", 'String'>
    readonly replies: FieldRef<"Discussion", 'Int'>
    readonly views: FieldRef<"Discussion", 'Int'>
    readonly timeAgo: FieldRef<"Discussion", 'String'>
    readonly hot: FieldRef<"Discussion", 'Boolean'>
    readonly createdAt: FieldRef<"Discussion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Discussion findUnique
   */
  export type DiscussionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Filter, which Discussion to fetch.
     */
    where: DiscussionWhereUniqueInput
  }

  /**
   * Discussion findUniqueOrThrow
   */
  export type DiscussionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Filter, which Discussion to fetch.
     */
    where: DiscussionWhereUniqueInput
  }

  /**
   * Discussion findFirst
   */
  export type DiscussionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Filter, which Discussion to fetch.
     */
    where?: DiscussionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discussions to fetch.
     */
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discussions.
     */
    cursor?: DiscussionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discussions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discussions.
     */
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[]
  }

  /**
   * Discussion findFirstOrThrow
   */
  export type DiscussionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Filter, which Discussion to fetch.
     */
    where?: DiscussionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discussions to fetch.
     */
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discussions.
     */
    cursor?: DiscussionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discussions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discussions.
     */
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[]
  }

  /**
   * Discussion findMany
   */
  export type DiscussionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Filter, which Discussions to fetch.
     */
    where?: DiscussionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discussions to fetch.
     */
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Discussions.
     */
    cursor?: DiscussionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discussions.
     */
    skip?: number
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[]
  }

  /**
   * Discussion create
   */
  export type DiscussionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * The data needed to create a Discussion.
     */
    data: XOR<DiscussionCreateInput, DiscussionUncheckedCreateInput>
  }

  /**
   * Discussion createMany
   */
  export type DiscussionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Discussions.
     */
    data: DiscussionCreateManyInput | DiscussionCreateManyInput[]
  }

  /**
   * Discussion update
   */
  export type DiscussionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * The data needed to update a Discussion.
     */
    data: XOR<DiscussionUpdateInput, DiscussionUncheckedUpdateInput>
    /**
     * Choose, which Discussion to update.
     */
    where: DiscussionWhereUniqueInput
  }

  /**
   * Discussion updateMany
   */
  export type DiscussionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Discussions.
     */
    data: XOR<DiscussionUpdateManyMutationInput, DiscussionUncheckedUpdateManyInput>
    /**
     * Filter which Discussions to update
     */
    where?: DiscussionWhereInput
    /**
     * Limit how many Discussions to update.
     */
    limit?: number
  }

  /**
   * Discussion upsert
   */
  export type DiscussionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * The filter to search for the Discussion to update in case it exists.
     */
    where: DiscussionWhereUniqueInput
    /**
     * In case the Discussion found by the `where` argument doesn't exist, create a new Discussion with this data.
     */
    create: XOR<DiscussionCreateInput, DiscussionUncheckedCreateInput>
    /**
     * In case the Discussion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscussionUpdateInput, DiscussionUncheckedUpdateInput>
  }

  /**
   * Discussion delete
   */
  export type DiscussionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Filter which Discussion to delete.
     */
    where: DiscussionWhereUniqueInput
  }

  /**
   * Discussion deleteMany
   */
  export type DiscussionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discussions to delete
     */
    where?: DiscussionWhereInput
    /**
     * Limit how many Discussions to delete.
     */
    limit?: number
  }

  /**
   * Discussion findRaw
   */
  export type DiscussionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Discussion aggregateRaw
   */
  export type DiscussionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Discussion without action
   */
  export type DiscussionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    attendees: number | null
  }

  export type EventSumAggregateOutputType = {
    attendees: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    title: string | null
    type: string | null
    date: Date | null
    time: string | null
    location: string | null
    description: string | null
    attendees: number | null
    createdAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    type: string | null
    date: Date | null
    time: string | null
    location: string | null
    description: string | null
    attendees: number | null
    createdAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    type: number
    date: number
    time: number
    location: number
    description: number
    attendees: number
    image: number
    createdAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    attendees?: true
  }

  export type EventSumAggregateInputType = {
    attendees?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    type?: true
    date?: true
    time?: true
    location?: true
    description?: true
    attendees?: true
    createdAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    type?: true
    date?: true
    time?: true
    location?: true
    description?: true
    attendees?: true
    createdAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    type?: true
    date?: true
    time?: true
    location?: true
    description?: true
    attendees?: true
    image?: true
    createdAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    title: string
    type: string
    date: Date
    time: string
    location: string
    description: string
    attendees: number
    image: string[]
    createdAt: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    date?: boolean
    time?: boolean
    location?: boolean
    description?: boolean
    attendees?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["event"]>



  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    type?: boolean
    date?: boolean
    time?: boolean
    location?: boolean
    description?: boolean
    attendees?: boolean
    image?: boolean
    createdAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "type" | "date" | "time" | "location" | "description" | "attendees" | "image" | "createdAt", ExtArgs["result"]["event"]>

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      type: string
      date: Date
      time: string
      location: string
      description: string
      attendees: number
      image: string[]
      createdAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * @param {EventFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const event = await prisma.event.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EventFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Event.
     * @param {EventAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const event = await prisma.event.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EventAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly type: FieldRef<"Event", 'String'>
    readonly date: FieldRef<"Event", 'DateTime'>
    readonly time: FieldRef<"Event", 'String'>
    readonly location: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly attendees: FieldRef<"Event", 'Int'>
    readonly image: FieldRef<"Event", 'String[]'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event findRaw
   */
  export type EventFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Event aggregateRaw
   */
  export type EventAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
  }


  /**
   * Model Resource
   */

  export type AggregateResource = {
    _count: ResourceCountAggregateOutputType | null
    _avg: ResourceAvgAggregateOutputType | null
    _sum: ResourceSumAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  export type ResourceAvgAggregateOutputType = {
    count: number | null
  }

  export type ResourceSumAggregateOutputType = {
    count: number | null
  }

  export type ResourceMinAggregateOutputType = {
    id: string | null
    title: string | null
    icon: string | null
    description: string | null
    count: number | null
    type: string | null
    author: string | null
    featured: boolean | null
    createdAt: Date | null
  }

  export type ResourceMaxAggregateOutputType = {
    id: string | null
    title: string | null
    icon: string | null
    description: string | null
    count: number | null
    type: string | null
    author: string | null
    featured: boolean | null
    createdAt: Date | null
  }

  export type ResourceCountAggregateOutputType = {
    id: number
    title: number
    icon: number
    description: number
    count: number
    type: number
    author: number
    featured: number
    image: number
    createdAt: number
    _all: number
  }


  export type ResourceAvgAggregateInputType = {
    count?: true
  }

  export type ResourceSumAggregateInputType = {
    count?: true
  }

  export type ResourceMinAggregateInputType = {
    id?: true
    title?: true
    icon?: true
    description?: true
    count?: true
    type?: true
    author?: true
    featured?: true
    createdAt?: true
  }

  export type ResourceMaxAggregateInputType = {
    id?: true
    title?: true
    icon?: true
    description?: true
    count?: true
    type?: true
    author?: true
    featured?: true
    createdAt?: true
  }

  export type ResourceCountAggregateInputType = {
    id?: true
    title?: true
    icon?: true
    description?: true
    count?: true
    type?: true
    author?: true
    featured?: true
    image?: true
    createdAt?: true
    _all?: true
  }

  export type ResourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resource to aggregate.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resources
    **/
    _count?: true | ResourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceMaxAggregateInputType
  }

  export type GetResourceAggregateType<T extends ResourceAggregateArgs> = {
        [P in keyof T & keyof AggregateResource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResource[P]>
      : GetScalarType<T[P], AggregateResource[P]>
  }




  export type ResourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithAggregationInput | ResourceOrderByWithAggregationInput[]
    by: ResourceScalarFieldEnum[] | ResourceScalarFieldEnum
    having?: ResourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceCountAggregateInputType | true
    _avg?: ResourceAvgAggregateInputType
    _sum?: ResourceSumAggregateInputType
    _min?: ResourceMinAggregateInputType
    _max?: ResourceMaxAggregateInputType
  }

  export type ResourceGroupByOutputType = {
    id: string
    title: string
    icon: string | null
    description: string
    count: number
    type: string
    author: string | null
    featured: boolean
    image: string[]
    createdAt: Date
    _count: ResourceCountAggregateOutputType | null
    _avg: ResourceAvgAggregateOutputType | null
    _sum: ResourceSumAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  type GetResourceGroupByPayload<T extends ResourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceGroupByOutputType[P]>
        }
      >
    >


  export type ResourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    icon?: boolean
    description?: boolean
    count?: boolean
    type?: boolean
    author?: boolean
    featured?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["resource"]>



  export type ResourceSelectScalar = {
    id?: boolean
    title?: boolean
    icon?: boolean
    description?: boolean
    count?: boolean
    type?: boolean
    author?: boolean
    featured?: boolean
    image?: boolean
    createdAt?: boolean
  }

  export type ResourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "icon" | "description" | "count" | "type" | "author" | "featured" | "image" | "createdAt", ExtArgs["result"]["resource"]>

  export type $ResourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resource"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      icon: string | null
      description: string
      count: number
      type: string
      author: string | null
      featured: boolean
      image: string[]
      createdAt: Date
    }, ExtArgs["result"]["resource"]>
    composites: {}
  }

  type ResourceGetPayload<S extends boolean | null | undefined | ResourceDefaultArgs> = $Result.GetResult<Prisma.$ResourcePayload, S>

  type ResourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResourceCountAggregateInputType | true
    }

  export interface ResourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resource'], meta: { name: 'Resource' } }
    /**
     * Find zero or one Resource that matches the filter.
     * @param {ResourceFindUniqueArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResourceFindUniqueArgs>(args: SelectSubset<T, ResourceFindUniqueArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResourceFindUniqueOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResourceFindUniqueOrThrowArgs>(args: SelectSubset<T, ResourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResourceFindFirstArgs>(args?: SelectSubset<T, ResourceFindFirstArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResourceFindFirstOrThrowArgs>(args?: SelectSubset<T, ResourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resources
     * const resources = await prisma.resource.findMany()
     * 
     * // Get first 10 Resources
     * const resources = await prisma.resource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resourceWithIdOnly = await prisma.resource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResourceFindManyArgs>(args?: SelectSubset<T, ResourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resource.
     * @param {ResourceCreateArgs} args - Arguments to create a Resource.
     * @example
     * // Create one Resource
     * const Resource = await prisma.resource.create({
     *   data: {
     *     // ... data to create a Resource
     *   }
     * })
     * 
     */
    create<T extends ResourceCreateArgs>(args: SelectSubset<T, ResourceCreateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resources.
     * @param {ResourceCreateManyArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResourceCreateManyArgs>(args?: SelectSubset<T, ResourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Resource.
     * @param {ResourceDeleteArgs} args - Arguments to delete one Resource.
     * @example
     * // Delete one Resource
     * const Resource = await prisma.resource.delete({
     *   where: {
     *     // ... filter to delete one Resource
     *   }
     * })
     * 
     */
    delete<T extends ResourceDeleteArgs>(args: SelectSubset<T, ResourceDeleteArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resource.
     * @param {ResourceUpdateArgs} args - Arguments to update one Resource.
     * @example
     * // Update one Resource
     * const resource = await prisma.resource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResourceUpdateArgs>(args: SelectSubset<T, ResourceUpdateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resources.
     * @param {ResourceDeleteManyArgs} args - Arguments to filter Resources to delete.
     * @example
     * // Delete a few Resources
     * const { count } = await prisma.resource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResourceDeleteManyArgs>(args?: SelectSubset<T, ResourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResourceUpdateManyArgs>(args: SelectSubset<T, ResourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Resource.
     * @param {ResourceUpsertArgs} args - Arguments to update or create a Resource.
     * @example
     * // Update or create a Resource
     * const resource = await prisma.resource.upsert({
     *   create: {
     *     // ... data to create a Resource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resource we want to update
     *   }
     * })
     */
    upsert<T extends ResourceUpsertArgs>(args: SelectSubset<T, ResourceUpsertArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resources that matches the filter.
     * @param {ResourceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const resource = await prisma.resource.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ResourceFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Resource.
     * @param {ResourceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const resource = await prisma.resource.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ResourceAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCountArgs} args - Arguments to filter Resources to count.
     * @example
     * // Count the number of Resources
     * const count = await prisma.resource.count({
     *   where: {
     *     // ... the filter for the Resources we want to count
     *   }
     * })
    **/
    count<T extends ResourceCountArgs>(
      args?: Subset<T, ResourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResourceAggregateArgs>(args: Subset<T, ResourceAggregateArgs>): Prisma.PrismaPromise<GetResourceAggregateType<T>>

    /**
     * Group by Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceGroupByArgs['orderBy'] }
        : { orderBy?: ResourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resource model
   */
  readonly fields: ResourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resource model
   */
  interface ResourceFieldRefs {
    readonly id: FieldRef<"Resource", 'String'>
    readonly title: FieldRef<"Resource", 'String'>
    readonly icon: FieldRef<"Resource", 'String'>
    readonly description: FieldRef<"Resource", 'String'>
    readonly count: FieldRef<"Resource", 'Int'>
    readonly type: FieldRef<"Resource", 'String'>
    readonly author: FieldRef<"Resource", 'String'>
    readonly featured: FieldRef<"Resource", 'Boolean'>
    readonly image: FieldRef<"Resource", 'String[]'>
    readonly createdAt: FieldRef<"Resource", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resource findUnique
   */
  export type ResourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findUniqueOrThrow
   */
  export type ResourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findFirst
   */
  export type ResourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findFirstOrThrow
   */
  export type ResourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findMany
   */
  export type ResourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Filter, which Resources to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource create
   */
  export type ResourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The data needed to create a Resource.
     */
    data: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
  }

  /**
   * Resource createMany
   */
  export type ResourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
  }

  /**
   * Resource update
   */
  export type ResourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The data needed to update a Resource.
     */
    data: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
    /**
     * Choose, which Resource to update.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource updateMany
   */
  export type ResourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resources.
     */
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
    /**
     * Filter which Resources to update
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to update.
     */
    limit?: number
  }

  /**
   * Resource upsert
   */
  export type ResourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The filter to search for the Resource to update in case it exists.
     */
    where: ResourceWhereUniqueInput
    /**
     * In case the Resource found by the `where` argument doesn't exist, create a new Resource with this data.
     */
    create: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
    /**
     * In case the Resource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
  }

  /**
   * Resource delete
   */
  export type ResourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Filter which Resource to delete.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource deleteMany
   */
  export type ResourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resources to delete
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to delete.
     */
    limit?: number
  }

  /**
   * Resource findRaw
   */
  export type ResourceFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Resource aggregateRaw
   */
  export type ResourceAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Resource without action
   */
  export type ResourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
  }


  /**
   * Model Expert
   */

  export type AggregateExpert = {
    _count: ExpertCountAggregateOutputType | null
    _min: ExpertMinAggregateOutputType | null
    _max: ExpertMaxAggregateOutputType | null
  }

  export type ExpertMinAggregateOutputType = {
    id: string | null
    name: string | null
    specialty: string | null
    image: string | null
    bio: string | null
    createdAt: Date | null
  }

  export type ExpertMaxAggregateOutputType = {
    id: string | null
    name: string | null
    specialty: string | null
    image: string | null
    bio: string | null
    createdAt: Date | null
  }

  export type ExpertCountAggregateOutputType = {
    id: number
    name: number
    specialty: number
    image: number
    bio: number
    expertise: number
    createdAt: number
    _all: number
  }


  export type ExpertMinAggregateInputType = {
    id?: true
    name?: true
    specialty?: true
    image?: true
    bio?: true
    createdAt?: true
  }

  export type ExpertMaxAggregateInputType = {
    id?: true
    name?: true
    specialty?: true
    image?: true
    bio?: true
    createdAt?: true
  }

  export type ExpertCountAggregateInputType = {
    id?: true
    name?: true
    specialty?: true
    image?: true
    bio?: true
    expertise?: true
    createdAt?: true
    _all?: true
  }

  export type ExpertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expert to aggregate.
     */
    where?: ExpertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experts to fetch.
     */
    orderBy?: ExpertOrderByWithRelationInput | ExpertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experts
    **/
    _count?: true | ExpertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpertMaxAggregateInputType
  }

  export type GetExpertAggregateType<T extends ExpertAggregateArgs> = {
        [P in keyof T & keyof AggregateExpert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpert[P]>
      : GetScalarType<T[P], AggregateExpert[P]>
  }




  export type ExpertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpertWhereInput
    orderBy?: ExpertOrderByWithAggregationInput | ExpertOrderByWithAggregationInput[]
    by: ExpertScalarFieldEnum[] | ExpertScalarFieldEnum
    having?: ExpertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpertCountAggregateInputType | true
    _min?: ExpertMinAggregateInputType
    _max?: ExpertMaxAggregateInputType
  }

  export type ExpertGroupByOutputType = {
    id: string
    name: string
    specialty: string
    image: string | null
    bio: string
    expertise: string[]
    createdAt: Date
    _count: ExpertCountAggregateOutputType | null
    _min: ExpertMinAggregateOutputType | null
    _max: ExpertMaxAggregateOutputType | null
  }

  type GetExpertGroupByPayload<T extends ExpertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpertGroupByOutputType[P]>
            : GetScalarType<T[P], ExpertGroupByOutputType[P]>
        }
      >
    >


  export type ExpertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    specialty?: boolean
    image?: boolean
    bio?: boolean
    expertise?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["expert"]>



  export type ExpertSelectScalar = {
    id?: boolean
    name?: boolean
    specialty?: boolean
    image?: boolean
    bio?: boolean
    expertise?: boolean
    createdAt?: boolean
  }

  export type ExpertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "specialty" | "image" | "bio" | "expertise" | "createdAt", ExtArgs["result"]["expert"]>

  export type $ExpertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expert"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      specialty: string
      image: string | null
      bio: string
      expertise: string[]
      createdAt: Date
    }, ExtArgs["result"]["expert"]>
    composites: {}
  }

  type ExpertGetPayload<S extends boolean | null | undefined | ExpertDefaultArgs> = $Result.GetResult<Prisma.$ExpertPayload, S>

  type ExpertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpertCountAggregateInputType | true
    }

  export interface ExpertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expert'], meta: { name: 'Expert' } }
    /**
     * Find zero or one Expert that matches the filter.
     * @param {ExpertFindUniqueArgs} args - Arguments to find a Expert
     * @example
     * // Get one Expert
     * const expert = await prisma.expert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpertFindUniqueArgs>(args: SelectSubset<T, ExpertFindUniqueArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpertFindUniqueOrThrowArgs} args - Arguments to find a Expert
     * @example
     * // Get one Expert
     * const expert = await prisma.expert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpertFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertFindFirstArgs} args - Arguments to find a Expert
     * @example
     * // Get one Expert
     * const expert = await prisma.expert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpertFindFirstArgs>(args?: SelectSubset<T, ExpertFindFirstArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertFindFirstOrThrowArgs} args - Arguments to find a Expert
     * @example
     * // Get one Expert
     * const expert = await prisma.expert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpertFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpertFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experts
     * const experts = await prisma.expert.findMany()
     * 
     * // Get first 10 Experts
     * const experts = await prisma.expert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expertWithIdOnly = await prisma.expert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpertFindManyArgs>(args?: SelectSubset<T, ExpertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expert.
     * @param {ExpertCreateArgs} args - Arguments to create a Expert.
     * @example
     * // Create one Expert
     * const Expert = await prisma.expert.create({
     *   data: {
     *     // ... data to create a Expert
     *   }
     * })
     * 
     */
    create<T extends ExpertCreateArgs>(args: SelectSubset<T, ExpertCreateArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Experts.
     * @param {ExpertCreateManyArgs} args - Arguments to create many Experts.
     * @example
     * // Create many Experts
     * const expert = await prisma.expert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpertCreateManyArgs>(args?: SelectSubset<T, ExpertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Expert.
     * @param {ExpertDeleteArgs} args - Arguments to delete one Expert.
     * @example
     * // Delete one Expert
     * const Expert = await prisma.expert.delete({
     *   where: {
     *     // ... filter to delete one Expert
     *   }
     * })
     * 
     */
    delete<T extends ExpertDeleteArgs>(args: SelectSubset<T, ExpertDeleteArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expert.
     * @param {ExpertUpdateArgs} args - Arguments to update one Expert.
     * @example
     * // Update one Expert
     * const expert = await prisma.expert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpertUpdateArgs>(args: SelectSubset<T, ExpertUpdateArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Experts.
     * @param {ExpertDeleteManyArgs} args - Arguments to filter Experts to delete.
     * @example
     * // Delete a few Experts
     * const { count } = await prisma.expert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpertDeleteManyArgs>(args?: SelectSubset<T, ExpertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experts
     * const expert = await prisma.expert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpertUpdateManyArgs>(args: SelectSubset<T, ExpertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Expert.
     * @param {ExpertUpsertArgs} args - Arguments to update or create a Expert.
     * @example
     * // Update or create a Expert
     * const expert = await prisma.expert.upsert({
     *   create: {
     *     // ... data to create a Expert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expert we want to update
     *   }
     * })
     */
    upsert<T extends ExpertUpsertArgs>(args: SelectSubset<T, ExpertUpsertArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experts that matches the filter.
     * @param {ExpertFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const expert = await prisma.expert.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ExpertFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Expert.
     * @param {ExpertAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const expert = await prisma.expert.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ExpertAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Experts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertCountArgs} args - Arguments to filter Experts to count.
     * @example
     * // Count the number of Experts
     * const count = await prisma.expert.count({
     *   where: {
     *     // ... the filter for the Experts we want to count
     *   }
     * })
    **/
    count<T extends ExpertCountArgs>(
      args?: Subset<T, ExpertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpertAggregateArgs>(args: Subset<T, ExpertAggregateArgs>): Prisma.PrismaPromise<GetExpertAggregateType<T>>

    /**
     * Group by Expert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpertGroupByArgs['orderBy'] }
        : { orderBy?: ExpertGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expert model
   */
  readonly fields: ExpertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expert model
   */
  interface ExpertFieldRefs {
    readonly id: FieldRef<"Expert", 'String'>
    readonly name: FieldRef<"Expert", 'String'>
    readonly specialty: FieldRef<"Expert", 'String'>
    readonly image: FieldRef<"Expert", 'String'>
    readonly bio: FieldRef<"Expert", 'String'>
    readonly expertise: FieldRef<"Expert", 'String[]'>
    readonly createdAt: FieldRef<"Expert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Expert findUnique
   */
  export type ExpertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Filter, which Expert to fetch.
     */
    where: ExpertWhereUniqueInput
  }

  /**
   * Expert findUniqueOrThrow
   */
  export type ExpertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Filter, which Expert to fetch.
     */
    where: ExpertWhereUniqueInput
  }

  /**
   * Expert findFirst
   */
  export type ExpertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Filter, which Expert to fetch.
     */
    where?: ExpertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experts to fetch.
     */
    orderBy?: ExpertOrderByWithRelationInput | ExpertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experts.
     */
    cursor?: ExpertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experts.
     */
    distinct?: ExpertScalarFieldEnum | ExpertScalarFieldEnum[]
  }

  /**
   * Expert findFirstOrThrow
   */
  export type ExpertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Filter, which Expert to fetch.
     */
    where?: ExpertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experts to fetch.
     */
    orderBy?: ExpertOrderByWithRelationInput | ExpertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experts.
     */
    cursor?: ExpertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experts.
     */
    distinct?: ExpertScalarFieldEnum | ExpertScalarFieldEnum[]
  }

  /**
   * Expert findMany
   */
  export type ExpertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Filter, which Experts to fetch.
     */
    where?: ExpertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experts to fetch.
     */
    orderBy?: ExpertOrderByWithRelationInput | ExpertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experts.
     */
    cursor?: ExpertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experts.
     */
    skip?: number
    distinct?: ExpertScalarFieldEnum | ExpertScalarFieldEnum[]
  }

  /**
   * Expert create
   */
  export type ExpertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * The data needed to create a Expert.
     */
    data: XOR<ExpertCreateInput, ExpertUncheckedCreateInput>
  }

  /**
   * Expert createMany
   */
  export type ExpertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experts.
     */
    data: ExpertCreateManyInput | ExpertCreateManyInput[]
  }

  /**
   * Expert update
   */
  export type ExpertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * The data needed to update a Expert.
     */
    data: XOR<ExpertUpdateInput, ExpertUncheckedUpdateInput>
    /**
     * Choose, which Expert to update.
     */
    where: ExpertWhereUniqueInput
  }

  /**
   * Expert updateMany
   */
  export type ExpertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experts.
     */
    data: XOR<ExpertUpdateManyMutationInput, ExpertUncheckedUpdateManyInput>
    /**
     * Filter which Experts to update
     */
    where?: ExpertWhereInput
    /**
     * Limit how many Experts to update.
     */
    limit?: number
  }

  /**
   * Expert upsert
   */
  export type ExpertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * The filter to search for the Expert to update in case it exists.
     */
    where: ExpertWhereUniqueInput
    /**
     * In case the Expert found by the `where` argument doesn't exist, create a new Expert with this data.
     */
    create: XOR<ExpertCreateInput, ExpertUncheckedCreateInput>
    /**
     * In case the Expert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpertUpdateInput, ExpertUncheckedUpdateInput>
  }

  /**
   * Expert delete
   */
  export type ExpertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Filter which Expert to delete.
     */
    where: ExpertWhereUniqueInput
  }

  /**
   * Expert deleteMany
   */
  export type ExpertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experts to delete
     */
    where?: ExpertWhereInput
    /**
     * Limit how many Experts to delete.
     */
    limit?: number
  }

  /**
   * Expert findRaw
   */
  export type ExpertFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Expert aggregateRaw
   */
  export type ExpertAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Expert without action
   */
  export type ExpertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
  }


  /**
   * Model LostFoundPet
   */

  export type AggregateLostFoundPet = {
    _count: LostFoundPetCountAggregateOutputType | null
    _min: LostFoundPetMinAggregateOutputType | null
    _max: LostFoundPetMaxAggregateOutputType | null
  }

  export type LostFoundPetMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    breed: string | null
    gender: string | null
    age: string | null
    location: string | null
    date: Date | null
    description: string | null
    contact: string | null
    reward: boolean | null
    status: $Enums.PetStatus | null
    createdAt: Date | null
  }

  export type LostFoundPetMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    breed: string | null
    gender: string | null
    age: string | null
    location: string | null
    date: Date | null
    description: string | null
    contact: string | null
    reward: boolean | null
    status: $Enums.PetStatus | null
    createdAt: Date | null
  }

  export type LostFoundPetCountAggregateOutputType = {
    id: number
    name: number
    type: number
    breed: number
    gender: number
    age: number
    location: number
    date: number
    description: number
    contact: number
    image: number
    reward: number
    status: number
    createdAt: number
    _all: number
  }


  export type LostFoundPetMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    breed?: true
    gender?: true
    age?: true
    location?: true
    date?: true
    description?: true
    contact?: true
    reward?: true
    status?: true
    createdAt?: true
  }

  export type LostFoundPetMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    breed?: true
    gender?: true
    age?: true
    location?: true
    date?: true
    description?: true
    contact?: true
    reward?: true
    status?: true
    createdAt?: true
  }

  export type LostFoundPetCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    breed?: true
    gender?: true
    age?: true
    location?: true
    date?: true
    description?: true
    contact?: true
    image?: true
    reward?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type LostFoundPetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LostFoundPet to aggregate.
     */
    where?: LostFoundPetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LostFoundPets to fetch.
     */
    orderBy?: LostFoundPetOrderByWithRelationInput | LostFoundPetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LostFoundPetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LostFoundPets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LostFoundPets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LostFoundPets
    **/
    _count?: true | LostFoundPetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LostFoundPetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LostFoundPetMaxAggregateInputType
  }

  export type GetLostFoundPetAggregateType<T extends LostFoundPetAggregateArgs> = {
        [P in keyof T & keyof AggregateLostFoundPet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLostFoundPet[P]>
      : GetScalarType<T[P], AggregateLostFoundPet[P]>
  }




  export type LostFoundPetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LostFoundPetWhereInput
    orderBy?: LostFoundPetOrderByWithAggregationInput | LostFoundPetOrderByWithAggregationInput[]
    by: LostFoundPetScalarFieldEnum[] | LostFoundPetScalarFieldEnum
    having?: LostFoundPetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LostFoundPetCountAggregateInputType | true
    _min?: LostFoundPetMinAggregateInputType
    _max?: LostFoundPetMaxAggregateInputType
  }

  export type LostFoundPetGroupByOutputType = {
    id: string
    name: string | null
    type: string
    breed: string
    gender: string
    age: string
    location: string
    date: Date
    description: string
    contact: string
    image: string[]
    reward: boolean
    status: $Enums.PetStatus
    createdAt: Date
    _count: LostFoundPetCountAggregateOutputType | null
    _min: LostFoundPetMinAggregateOutputType | null
    _max: LostFoundPetMaxAggregateOutputType | null
  }

  type GetLostFoundPetGroupByPayload<T extends LostFoundPetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LostFoundPetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LostFoundPetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LostFoundPetGroupByOutputType[P]>
            : GetScalarType<T[P], LostFoundPetGroupByOutputType[P]>
        }
      >
    >


  export type LostFoundPetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    breed?: boolean
    gender?: boolean
    age?: boolean
    location?: boolean
    date?: boolean
    description?: boolean
    contact?: boolean
    image?: boolean
    reward?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["lostFoundPet"]>



  export type LostFoundPetSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    breed?: boolean
    gender?: boolean
    age?: boolean
    location?: boolean
    date?: boolean
    description?: boolean
    contact?: boolean
    image?: boolean
    reward?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type LostFoundPetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "breed" | "gender" | "age" | "location" | "date" | "description" | "contact" | "image" | "reward" | "status" | "createdAt", ExtArgs["result"]["lostFoundPet"]>

  export type $LostFoundPetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LostFoundPet"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      type: string
      breed: string
      gender: string
      age: string
      location: string
      date: Date
      description: string
      contact: string
      image: string[]
      reward: boolean
      status: $Enums.PetStatus
      createdAt: Date
    }, ExtArgs["result"]["lostFoundPet"]>
    composites: {}
  }

  type LostFoundPetGetPayload<S extends boolean | null | undefined | LostFoundPetDefaultArgs> = $Result.GetResult<Prisma.$LostFoundPetPayload, S>

  type LostFoundPetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LostFoundPetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LostFoundPetCountAggregateInputType | true
    }

  export interface LostFoundPetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LostFoundPet'], meta: { name: 'LostFoundPet' } }
    /**
     * Find zero or one LostFoundPet that matches the filter.
     * @param {LostFoundPetFindUniqueArgs} args - Arguments to find a LostFoundPet
     * @example
     * // Get one LostFoundPet
     * const lostFoundPet = await prisma.lostFoundPet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LostFoundPetFindUniqueArgs>(args: SelectSubset<T, LostFoundPetFindUniqueArgs<ExtArgs>>): Prisma__LostFoundPetClient<$Result.GetResult<Prisma.$LostFoundPetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LostFoundPet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LostFoundPetFindUniqueOrThrowArgs} args - Arguments to find a LostFoundPet
     * @example
     * // Get one LostFoundPet
     * const lostFoundPet = await prisma.lostFoundPet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LostFoundPetFindUniqueOrThrowArgs>(args: SelectSubset<T, LostFoundPetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LostFoundPetClient<$Result.GetResult<Prisma.$LostFoundPetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LostFoundPet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostFoundPetFindFirstArgs} args - Arguments to find a LostFoundPet
     * @example
     * // Get one LostFoundPet
     * const lostFoundPet = await prisma.lostFoundPet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LostFoundPetFindFirstArgs>(args?: SelectSubset<T, LostFoundPetFindFirstArgs<ExtArgs>>): Prisma__LostFoundPetClient<$Result.GetResult<Prisma.$LostFoundPetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LostFoundPet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostFoundPetFindFirstOrThrowArgs} args - Arguments to find a LostFoundPet
     * @example
     * // Get one LostFoundPet
     * const lostFoundPet = await prisma.lostFoundPet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LostFoundPetFindFirstOrThrowArgs>(args?: SelectSubset<T, LostFoundPetFindFirstOrThrowArgs<ExtArgs>>): Prisma__LostFoundPetClient<$Result.GetResult<Prisma.$LostFoundPetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LostFoundPets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostFoundPetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LostFoundPets
     * const lostFoundPets = await prisma.lostFoundPet.findMany()
     * 
     * // Get first 10 LostFoundPets
     * const lostFoundPets = await prisma.lostFoundPet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lostFoundPetWithIdOnly = await prisma.lostFoundPet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LostFoundPetFindManyArgs>(args?: SelectSubset<T, LostFoundPetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LostFoundPetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LostFoundPet.
     * @param {LostFoundPetCreateArgs} args - Arguments to create a LostFoundPet.
     * @example
     * // Create one LostFoundPet
     * const LostFoundPet = await prisma.lostFoundPet.create({
     *   data: {
     *     // ... data to create a LostFoundPet
     *   }
     * })
     * 
     */
    create<T extends LostFoundPetCreateArgs>(args: SelectSubset<T, LostFoundPetCreateArgs<ExtArgs>>): Prisma__LostFoundPetClient<$Result.GetResult<Prisma.$LostFoundPetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LostFoundPets.
     * @param {LostFoundPetCreateManyArgs} args - Arguments to create many LostFoundPets.
     * @example
     * // Create many LostFoundPets
     * const lostFoundPet = await prisma.lostFoundPet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LostFoundPetCreateManyArgs>(args?: SelectSubset<T, LostFoundPetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LostFoundPet.
     * @param {LostFoundPetDeleteArgs} args - Arguments to delete one LostFoundPet.
     * @example
     * // Delete one LostFoundPet
     * const LostFoundPet = await prisma.lostFoundPet.delete({
     *   where: {
     *     // ... filter to delete one LostFoundPet
     *   }
     * })
     * 
     */
    delete<T extends LostFoundPetDeleteArgs>(args: SelectSubset<T, LostFoundPetDeleteArgs<ExtArgs>>): Prisma__LostFoundPetClient<$Result.GetResult<Prisma.$LostFoundPetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LostFoundPet.
     * @param {LostFoundPetUpdateArgs} args - Arguments to update one LostFoundPet.
     * @example
     * // Update one LostFoundPet
     * const lostFoundPet = await prisma.lostFoundPet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LostFoundPetUpdateArgs>(args: SelectSubset<T, LostFoundPetUpdateArgs<ExtArgs>>): Prisma__LostFoundPetClient<$Result.GetResult<Prisma.$LostFoundPetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LostFoundPets.
     * @param {LostFoundPetDeleteManyArgs} args - Arguments to filter LostFoundPets to delete.
     * @example
     * // Delete a few LostFoundPets
     * const { count } = await prisma.lostFoundPet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LostFoundPetDeleteManyArgs>(args?: SelectSubset<T, LostFoundPetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LostFoundPets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostFoundPetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LostFoundPets
     * const lostFoundPet = await prisma.lostFoundPet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LostFoundPetUpdateManyArgs>(args: SelectSubset<T, LostFoundPetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LostFoundPet.
     * @param {LostFoundPetUpsertArgs} args - Arguments to update or create a LostFoundPet.
     * @example
     * // Update or create a LostFoundPet
     * const lostFoundPet = await prisma.lostFoundPet.upsert({
     *   create: {
     *     // ... data to create a LostFoundPet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LostFoundPet we want to update
     *   }
     * })
     */
    upsert<T extends LostFoundPetUpsertArgs>(args: SelectSubset<T, LostFoundPetUpsertArgs<ExtArgs>>): Prisma__LostFoundPetClient<$Result.GetResult<Prisma.$LostFoundPetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LostFoundPets that matches the filter.
     * @param {LostFoundPetFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const lostFoundPet = await prisma.lostFoundPet.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: LostFoundPetFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a LostFoundPet.
     * @param {LostFoundPetAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const lostFoundPet = await prisma.lostFoundPet.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LostFoundPetAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of LostFoundPets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostFoundPetCountArgs} args - Arguments to filter LostFoundPets to count.
     * @example
     * // Count the number of LostFoundPets
     * const count = await prisma.lostFoundPet.count({
     *   where: {
     *     // ... the filter for the LostFoundPets we want to count
     *   }
     * })
    **/
    count<T extends LostFoundPetCountArgs>(
      args?: Subset<T, LostFoundPetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LostFoundPetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LostFoundPet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostFoundPetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LostFoundPetAggregateArgs>(args: Subset<T, LostFoundPetAggregateArgs>): Prisma.PrismaPromise<GetLostFoundPetAggregateType<T>>

    /**
     * Group by LostFoundPet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostFoundPetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LostFoundPetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LostFoundPetGroupByArgs['orderBy'] }
        : { orderBy?: LostFoundPetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LostFoundPetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLostFoundPetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LostFoundPet model
   */
  readonly fields: LostFoundPetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LostFoundPet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LostFoundPetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LostFoundPet model
   */
  interface LostFoundPetFieldRefs {
    readonly id: FieldRef<"LostFoundPet", 'String'>
    readonly name: FieldRef<"LostFoundPet", 'String'>
    readonly type: FieldRef<"LostFoundPet", 'String'>
    readonly breed: FieldRef<"LostFoundPet", 'String'>
    readonly gender: FieldRef<"LostFoundPet", 'String'>
    readonly age: FieldRef<"LostFoundPet", 'String'>
    readonly location: FieldRef<"LostFoundPet", 'String'>
    readonly date: FieldRef<"LostFoundPet", 'DateTime'>
    readonly description: FieldRef<"LostFoundPet", 'String'>
    readonly contact: FieldRef<"LostFoundPet", 'String'>
    readonly image: FieldRef<"LostFoundPet", 'String[]'>
    readonly reward: FieldRef<"LostFoundPet", 'Boolean'>
    readonly status: FieldRef<"LostFoundPet", 'PetStatus'>
    readonly createdAt: FieldRef<"LostFoundPet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LostFoundPet findUnique
   */
  export type LostFoundPetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPet
     */
    select?: LostFoundPetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostFoundPet
     */
    omit?: LostFoundPetOmit<ExtArgs> | null
    /**
     * Filter, which LostFoundPet to fetch.
     */
    where: LostFoundPetWhereUniqueInput
  }

  /**
   * LostFoundPet findUniqueOrThrow
   */
  export type LostFoundPetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPet
     */
    select?: LostFoundPetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostFoundPet
     */
    omit?: LostFoundPetOmit<ExtArgs> | null
    /**
     * Filter, which LostFoundPet to fetch.
     */
    where: LostFoundPetWhereUniqueInput
  }

  /**
   * LostFoundPet findFirst
   */
  export type LostFoundPetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPet
     */
    select?: LostFoundPetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostFoundPet
     */
    omit?: LostFoundPetOmit<ExtArgs> | null
    /**
     * Filter, which LostFoundPet to fetch.
     */
    where?: LostFoundPetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LostFoundPets to fetch.
     */
    orderBy?: LostFoundPetOrderByWithRelationInput | LostFoundPetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LostFoundPets.
     */
    cursor?: LostFoundPetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LostFoundPets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LostFoundPets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LostFoundPets.
     */
    distinct?: LostFoundPetScalarFieldEnum | LostFoundPetScalarFieldEnum[]
  }

  /**
   * LostFoundPet findFirstOrThrow
   */
  export type LostFoundPetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPet
     */
    select?: LostFoundPetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostFoundPet
     */
    omit?: LostFoundPetOmit<ExtArgs> | null
    /**
     * Filter, which LostFoundPet to fetch.
     */
    where?: LostFoundPetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LostFoundPets to fetch.
     */
    orderBy?: LostFoundPetOrderByWithRelationInput | LostFoundPetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LostFoundPets.
     */
    cursor?: LostFoundPetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LostFoundPets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LostFoundPets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LostFoundPets.
     */
    distinct?: LostFoundPetScalarFieldEnum | LostFoundPetScalarFieldEnum[]
  }

  /**
   * LostFoundPet findMany
   */
  export type LostFoundPetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPet
     */
    select?: LostFoundPetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostFoundPet
     */
    omit?: LostFoundPetOmit<ExtArgs> | null
    /**
     * Filter, which LostFoundPets to fetch.
     */
    where?: LostFoundPetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LostFoundPets to fetch.
     */
    orderBy?: LostFoundPetOrderByWithRelationInput | LostFoundPetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LostFoundPets.
     */
    cursor?: LostFoundPetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LostFoundPets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LostFoundPets.
     */
    skip?: number
    distinct?: LostFoundPetScalarFieldEnum | LostFoundPetScalarFieldEnum[]
  }

  /**
   * LostFoundPet create
   */
  export type LostFoundPetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPet
     */
    select?: LostFoundPetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostFoundPet
     */
    omit?: LostFoundPetOmit<ExtArgs> | null
    /**
     * The data needed to create a LostFoundPet.
     */
    data: XOR<LostFoundPetCreateInput, LostFoundPetUncheckedCreateInput>
  }

  /**
   * LostFoundPet createMany
   */
  export type LostFoundPetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LostFoundPets.
     */
    data: LostFoundPetCreateManyInput | LostFoundPetCreateManyInput[]
  }

  /**
   * LostFoundPet update
   */
  export type LostFoundPetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPet
     */
    select?: LostFoundPetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostFoundPet
     */
    omit?: LostFoundPetOmit<ExtArgs> | null
    /**
     * The data needed to update a LostFoundPet.
     */
    data: XOR<LostFoundPetUpdateInput, LostFoundPetUncheckedUpdateInput>
    /**
     * Choose, which LostFoundPet to update.
     */
    where: LostFoundPetWhereUniqueInput
  }

  /**
   * LostFoundPet updateMany
   */
  export type LostFoundPetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LostFoundPets.
     */
    data: XOR<LostFoundPetUpdateManyMutationInput, LostFoundPetUncheckedUpdateManyInput>
    /**
     * Filter which LostFoundPets to update
     */
    where?: LostFoundPetWhereInput
    /**
     * Limit how many LostFoundPets to update.
     */
    limit?: number
  }

  /**
   * LostFoundPet upsert
   */
  export type LostFoundPetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPet
     */
    select?: LostFoundPetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostFoundPet
     */
    omit?: LostFoundPetOmit<ExtArgs> | null
    /**
     * The filter to search for the LostFoundPet to update in case it exists.
     */
    where: LostFoundPetWhereUniqueInput
    /**
     * In case the LostFoundPet found by the `where` argument doesn't exist, create a new LostFoundPet with this data.
     */
    create: XOR<LostFoundPetCreateInput, LostFoundPetUncheckedCreateInput>
    /**
     * In case the LostFoundPet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LostFoundPetUpdateInput, LostFoundPetUncheckedUpdateInput>
  }

  /**
   * LostFoundPet delete
   */
  export type LostFoundPetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPet
     */
    select?: LostFoundPetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostFoundPet
     */
    omit?: LostFoundPetOmit<ExtArgs> | null
    /**
     * Filter which LostFoundPet to delete.
     */
    where: LostFoundPetWhereUniqueInput
  }

  /**
   * LostFoundPet deleteMany
   */
  export type LostFoundPetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LostFoundPets to delete
     */
    where?: LostFoundPetWhereInput
    /**
     * Limit how many LostFoundPets to delete.
     */
    limit?: number
  }

  /**
   * LostFoundPet findRaw
   */
  export type LostFoundPetFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * LostFoundPet aggregateRaw
   */
  export type LostFoundPetAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * LostFoundPet without action
   */
  export type LostFoundPetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostFoundPet
     */
    select?: LostFoundPetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LostFoundPet
     */
    omit?: LostFoundPetOmit<ExtArgs> | null
  }


  /**
   * Model SuccessStory
   */

  export type AggregateSuccessStory = {
    _count: SuccessStoryCountAggregateOutputType | null
    _avg: SuccessStoryAvgAggregateOutputType | null
    _sum: SuccessStorySumAggregateOutputType | null
    _min: SuccessStoryMinAggregateOutputType | null
    _max: SuccessStoryMaxAggregateOutputType | null
  }

  export type SuccessStoryAvgAggregateOutputType = {
    days: number | null
  }

  export type SuccessStorySumAggregateOutputType = {
    days: number | null
  }

  export type SuccessStoryMinAggregateOutputType = {
    id: string | null
    pet: string | null
    type: string | null
    days: number | null
    story: string | null
    createdAt: Date | null
  }

  export type SuccessStoryMaxAggregateOutputType = {
    id: string | null
    pet: string | null
    type: string | null
    days: number | null
    story: string | null
    createdAt: Date | null
  }

  export type SuccessStoryCountAggregateOutputType = {
    id: number
    pet: number
    type: number
    days: number
    story: number
    image: number
    createdAt: number
    _all: number
  }


  export type SuccessStoryAvgAggregateInputType = {
    days?: true
  }

  export type SuccessStorySumAggregateInputType = {
    days?: true
  }

  export type SuccessStoryMinAggregateInputType = {
    id?: true
    pet?: true
    type?: true
    days?: true
    story?: true
    createdAt?: true
  }

  export type SuccessStoryMaxAggregateInputType = {
    id?: true
    pet?: true
    type?: true
    days?: true
    story?: true
    createdAt?: true
  }

  export type SuccessStoryCountAggregateInputType = {
    id?: true
    pet?: true
    type?: true
    days?: true
    story?: true
    image?: true
    createdAt?: true
    _all?: true
  }

  export type SuccessStoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuccessStory to aggregate.
     */
    where?: SuccessStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuccessStories to fetch.
     */
    orderBy?: SuccessStoryOrderByWithRelationInput | SuccessStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuccessStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuccessStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuccessStories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SuccessStories
    **/
    _count?: true | SuccessStoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuccessStoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuccessStorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuccessStoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuccessStoryMaxAggregateInputType
  }

  export type GetSuccessStoryAggregateType<T extends SuccessStoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSuccessStory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuccessStory[P]>
      : GetScalarType<T[P], AggregateSuccessStory[P]>
  }




  export type SuccessStoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuccessStoryWhereInput
    orderBy?: SuccessStoryOrderByWithAggregationInput | SuccessStoryOrderByWithAggregationInput[]
    by: SuccessStoryScalarFieldEnum[] | SuccessStoryScalarFieldEnum
    having?: SuccessStoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuccessStoryCountAggregateInputType | true
    _avg?: SuccessStoryAvgAggregateInputType
    _sum?: SuccessStorySumAggregateInputType
    _min?: SuccessStoryMinAggregateInputType
    _max?: SuccessStoryMaxAggregateInputType
  }

  export type SuccessStoryGroupByOutputType = {
    id: string
    pet: string
    type: string
    days: number
    story: string
    image: string[]
    createdAt: Date
    _count: SuccessStoryCountAggregateOutputType | null
    _avg: SuccessStoryAvgAggregateOutputType | null
    _sum: SuccessStorySumAggregateOutputType | null
    _min: SuccessStoryMinAggregateOutputType | null
    _max: SuccessStoryMaxAggregateOutputType | null
  }

  type GetSuccessStoryGroupByPayload<T extends SuccessStoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuccessStoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuccessStoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuccessStoryGroupByOutputType[P]>
            : GetScalarType<T[P], SuccessStoryGroupByOutputType[P]>
        }
      >
    >


  export type SuccessStorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pet?: boolean
    type?: boolean
    days?: boolean
    story?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["successStory"]>



  export type SuccessStorySelectScalar = {
    id?: boolean
    pet?: boolean
    type?: boolean
    days?: boolean
    story?: boolean
    image?: boolean
    createdAt?: boolean
  }

  export type SuccessStoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pet" | "type" | "days" | "story" | "image" | "createdAt", ExtArgs["result"]["successStory"]>

  export type $SuccessStoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SuccessStory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pet: string
      type: string
      days: number
      story: string
      image: string[]
      createdAt: Date
    }, ExtArgs["result"]["successStory"]>
    composites: {}
  }

  type SuccessStoryGetPayload<S extends boolean | null | undefined | SuccessStoryDefaultArgs> = $Result.GetResult<Prisma.$SuccessStoryPayload, S>

  type SuccessStoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuccessStoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuccessStoryCountAggregateInputType | true
    }

  export interface SuccessStoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SuccessStory'], meta: { name: 'SuccessStory' } }
    /**
     * Find zero or one SuccessStory that matches the filter.
     * @param {SuccessStoryFindUniqueArgs} args - Arguments to find a SuccessStory
     * @example
     * // Get one SuccessStory
     * const successStory = await prisma.successStory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuccessStoryFindUniqueArgs>(args: SelectSubset<T, SuccessStoryFindUniqueArgs<ExtArgs>>): Prisma__SuccessStoryClient<$Result.GetResult<Prisma.$SuccessStoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SuccessStory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuccessStoryFindUniqueOrThrowArgs} args - Arguments to find a SuccessStory
     * @example
     * // Get one SuccessStory
     * const successStory = await prisma.successStory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuccessStoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SuccessStoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuccessStoryClient<$Result.GetResult<Prisma.$SuccessStoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuccessStory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessStoryFindFirstArgs} args - Arguments to find a SuccessStory
     * @example
     * // Get one SuccessStory
     * const successStory = await prisma.successStory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuccessStoryFindFirstArgs>(args?: SelectSubset<T, SuccessStoryFindFirstArgs<ExtArgs>>): Prisma__SuccessStoryClient<$Result.GetResult<Prisma.$SuccessStoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuccessStory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessStoryFindFirstOrThrowArgs} args - Arguments to find a SuccessStory
     * @example
     * // Get one SuccessStory
     * const successStory = await prisma.successStory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuccessStoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SuccessStoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuccessStoryClient<$Result.GetResult<Prisma.$SuccessStoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SuccessStories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessStoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuccessStories
     * const successStories = await prisma.successStory.findMany()
     * 
     * // Get first 10 SuccessStories
     * const successStories = await prisma.successStory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const successStoryWithIdOnly = await prisma.successStory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuccessStoryFindManyArgs>(args?: SelectSubset<T, SuccessStoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuccessStoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SuccessStory.
     * @param {SuccessStoryCreateArgs} args - Arguments to create a SuccessStory.
     * @example
     * // Create one SuccessStory
     * const SuccessStory = await prisma.successStory.create({
     *   data: {
     *     // ... data to create a SuccessStory
     *   }
     * })
     * 
     */
    create<T extends SuccessStoryCreateArgs>(args: SelectSubset<T, SuccessStoryCreateArgs<ExtArgs>>): Prisma__SuccessStoryClient<$Result.GetResult<Prisma.$SuccessStoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SuccessStories.
     * @param {SuccessStoryCreateManyArgs} args - Arguments to create many SuccessStories.
     * @example
     * // Create many SuccessStories
     * const successStory = await prisma.successStory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuccessStoryCreateManyArgs>(args?: SelectSubset<T, SuccessStoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SuccessStory.
     * @param {SuccessStoryDeleteArgs} args - Arguments to delete one SuccessStory.
     * @example
     * // Delete one SuccessStory
     * const SuccessStory = await prisma.successStory.delete({
     *   where: {
     *     // ... filter to delete one SuccessStory
     *   }
     * })
     * 
     */
    delete<T extends SuccessStoryDeleteArgs>(args: SelectSubset<T, SuccessStoryDeleteArgs<ExtArgs>>): Prisma__SuccessStoryClient<$Result.GetResult<Prisma.$SuccessStoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SuccessStory.
     * @param {SuccessStoryUpdateArgs} args - Arguments to update one SuccessStory.
     * @example
     * // Update one SuccessStory
     * const successStory = await prisma.successStory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuccessStoryUpdateArgs>(args: SelectSubset<T, SuccessStoryUpdateArgs<ExtArgs>>): Prisma__SuccessStoryClient<$Result.GetResult<Prisma.$SuccessStoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SuccessStories.
     * @param {SuccessStoryDeleteManyArgs} args - Arguments to filter SuccessStories to delete.
     * @example
     * // Delete a few SuccessStories
     * const { count } = await prisma.successStory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuccessStoryDeleteManyArgs>(args?: SelectSubset<T, SuccessStoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuccessStories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessStoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuccessStories
     * const successStory = await prisma.successStory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuccessStoryUpdateManyArgs>(args: SelectSubset<T, SuccessStoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SuccessStory.
     * @param {SuccessStoryUpsertArgs} args - Arguments to update or create a SuccessStory.
     * @example
     * // Update or create a SuccessStory
     * const successStory = await prisma.successStory.upsert({
     *   create: {
     *     // ... data to create a SuccessStory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuccessStory we want to update
     *   }
     * })
     */
    upsert<T extends SuccessStoryUpsertArgs>(args: SelectSubset<T, SuccessStoryUpsertArgs<ExtArgs>>): Prisma__SuccessStoryClient<$Result.GetResult<Prisma.$SuccessStoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SuccessStories that matches the filter.
     * @param {SuccessStoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const successStory = await prisma.successStory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SuccessStoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SuccessStory.
     * @param {SuccessStoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const successStory = await prisma.successStory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SuccessStoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SuccessStories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessStoryCountArgs} args - Arguments to filter SuccessStories to count.
     * @example
     * // Count the number of SuccessStories
     * const count = await prisma.successStory.count({
     *   where: {
     *     // ... the filter for the SuccessStories we want to count
     *   }
     * })
    **/
    count<T extends SuccessStoryCountArgs>(
      args?: Subset<T, SuccessStoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuccessStoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SuccessStory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessStoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SuccessStoryAggregateArgs>(args: Subset<T, SuccessStoryAggregateArgs>): Prisma.PrismaPromise<GetSuccessStoryAggregateType<T>>

    /**
     * Group by SuccessStory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessStoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SuccessStoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuccessStoryGroupByArgs['orderBy'] }
        : { orderBy?: SuccessStoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SuccessStoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuccessStoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SuccessStory model
   */
  readonly fields: SuccessStoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SuccessStory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuccessStoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SuccessStory model
   */
  interface SuccessStoryFieldRefs {
    readonly id: FieldRef<"SuccessStory", 'String'>
    readonly pet: FieldRef<"SuccessStory", 'String'>
    readonly type: FieldRef<"SuccessStory", 'String'>
    readonly days: FieldRef<"SuccessStory", 'Int'>
    readonly story: FieldRef<"SuccessStory", 'String'>
    readonly image: FieldRef<"SuccessStory", 'String[]'>
    readonly createdAt: FieldRef<"SuccessStory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SuccessStory findUnique
   */
  export type SuccessStoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessStory
     */
    select?: SuccessStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessStory
     */
    omit?: SuccessStoryOmit<ExtArgs> | null
    /**
     * Filter, which SuccessStory to fetch.
     */
    where: SuccessStoryWhereUniqueInput
  }

  /**
   * SuccessStory findUniqueOrThrow
   */
  export type SuccessStoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessStory
     */
    select?: SuccessStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessStory
     */
    omit?: SuccessStoryOmit<ExtArgs> | null
    /**
     * Filter, which SuccessStory to fetch.
     */
    where: SuccessStoryWhereUniqueInput
  }

  /**
   * SuccessStory findFirst
   */
  export type SuccessStoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessStory
     */
    select?: SuccessStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessStory
     */
    omit?: SuccessStoryOmit<ExtArgs> | null
    /**
     * Filter, which SuccessStory to fetch.
     */
    where?: SuccessStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuccessStories to fetch.
     */
    orderBy?: SuccessStoryOrderByWithRelationInput | SuccessStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuccessStories.
     */
    cursor?: SuccessStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuccessStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuccessStories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuccessStories.
     */
    distinct?: SuccessStoryScalarFieldEnum | SuccessStoryScalarFieldEnum[]
  }

  /**
   * SuccessStory findFirstOrThrow
   */
  export type SuccessStoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessStory
     */
    select?: SuccessStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessStory
     */
    omit?: SuccessStoryOmit<ExtArgs> | null
    /**
     * Filter, which SuccessStory to fetch.
     */
    where?: SuccessStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuccessStories to fetch.
     */
    orderBy?: SuccessStoryOrderByWithRelationInput | SuccessStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuccessStories.
     */
    cursor?: SuccessStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuccessStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuccessStories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuccessStories.
     */
    distinct?: SuccessStoryScalarFieldEnum | SuccessStoryScalarFieldEnum[]
  }

  /**
   * SuccessStory findMany
   */
  export type SuccessStoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessStory
     */
    select?: SuccessStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessStory
     */
    omit?: SuccessStoryOmit<ExtArgs> | null
    /**
     * Filter, which SuccessStories to fetch.
     */
    where?: SuccessStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuccessStories to fetch.
     */
    orderBy?: SuccessStoryOrderByWithRelationInput | SuccessStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SuccessStories.
     */
    cursor?: SuccessStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuccessStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuccessStories.
     */
    skip?: number
    distinct?: SuccessStoryScalarFieldEnum | SuccessStoryScalarFieldEnum[]
  }

  /**
   * SuccessStory create
   */
  export type SuccessStoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessStory
     */
    select?: SuccessStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessStory
     */
    omit?: SuccessStoryOmit<ExtArgs> | null
    /**
     * The data needed to create a SuccessStory.
     */
    data: XOR<SuccessStoryCreateInput, SuccessStoryUncheckedCreateInput>
  }

  /**
   * SuccessStory createMany
   */
  export type SuccessStoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuccessStories.
     */
    data: SuccessStoryCreateManyInput | SuccessStoryCreateManyInput[]
  }

  /**
   * SuccessStory update
   */
  export type SuccessStoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessStory
     */
    select?: SuccessStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessStory
     */
    omit?: SuccessStoryOmit<ExtArgs> | null
    /**
     * The data needed to update a SuccessStory.
     */
    data: XOR<SuccessStoryUpdateInput, SuccessStoryUncheckedUpdateInput>
    /**
     * Choose, which SuccessStory to update.
     */
    where: SuccessStoryWhereUniqueInput
  }

  /**
   * SuccessStory updateMany
   */
  export type SuccessStoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SuccessStories.
     */
    data: XOR<SuccessStoryUpdateManyMutationInput, SuccessStoryUncheckedUpdateManyInput>
    /**
     * Filter which SuccessStories to update
     */
    where?: SuccessStoryWhereInput
    /**
     * Limit how many SuccessStories to update.
     */
    limit?: number
  }

  /**
   * SuccessStory upsert
   */
  export type SuccessStoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessStory
     */
    select?: SuccessStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessStory
     */
    omit?: SuccessStoryOmit<ExtArgs> | null
    /**
     * The filter to search for the SuccessStory to update in case it exists.
     */
    where: SuccessStoryWhereUniqueInput
    /**
     * In case the SuccessStory found by the `where` argument doesn't exist, create a new SuccessStory with this data.
     */
    create: XOR<SuccessStoryCreateInput, SuccessStoryUncheckedCreateInput>
    /**
     * In case the SuccessStory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuccessStoryUpdateInput, SuccessStoryUncheckedUpdateInput>
  }

  /**
   * SuccessStory delete
   */
  export type SuccessStoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessStory
     */
    select?: SuccessStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessStory
     */
    omit?: SuccessStoryOmit<ExtArgs> | null
    /**
     * Filter which SuccessStory to delete.
     */
    where: SuccessStoryWhereUniqueInput
  }

  /**
   * SuccessStory deleteMany
   */
  export type SuccessStoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuccessStories to delete
     */
    where?: SuccessStoryWhereInput
    /**
     * Limit how many SuccessStories to delete.
     */
    limit?: number
  }

  /**
   * SuccessStory findRaw
   */
  export type SuccessStoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SuccessStory aggregateRaw
   */
  export type SuccessStoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SuccessStory without action
   */
  export type SuccessStoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessStory
     */
    select?: SuccessStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessStory
     */
    omit?: SuccessStoryOmit<ExtArgs> | null
  }


  /**
   * Model ResourceCategory
   */

  export type AggregateResourceCategory = {
    _count: ResourceCategoryCountAggregateOutputType | null
    _avg: ResourceCategoryAvgAggregateOutputType | null
    _sum: ResourceCategorySumAggregateOutputType | null
    _min: ResourceCategoryMinAggregateOutputType | null
    _max: ResourceCategoryMaxAggregateOutputType | null
  }

  export type ResourceCategoryAvgAggregateOutputType = {
    count: number | null
  }

  export type ResourceCategorySumAggregateOutputType = {
    count: number | null
  }

  export type ResourceCategoryMinAggregateOutputType = {
    id: string | null
    title: string | null
    icon: string | null
    description: string | null
    count: number | null
    color: string | null
    textColor: string | null
    borderColor: string | null
  }

  export type ResourceCategoryMaxAggregateOutputType = {
    id: string | null
    title: string | null
    icon: string | null
    description: string | null
    count: number | null
    color: string | null
    textColor: string | null
    borderColor: string | null
  }

  export type ResourceCategoryCountAggregateOutputType = {
    id: number
    title: number
    icon: number
    description: number
    count: number
    color: number
    textColor: number
    borderColor: number
    _all: number
  }


  export type ResourceCategoryAvgAggregateInputType = {
    count?: true
  }

  export type ResourceCategorySumAggregateInputType = {
    count?: true
  }

  export type ResourceCategoryMinAggregateInputType = {
    id?: true
    title?: true
    icon?: true
    description?: true
    count?: true
    color?: true
    textColor?: true
    borderColor?: true
  }

  export type ResourceCategoryMaxAggregateInputType = {
    id?: true
    title?: true
    icon?: true
    description?: true
    count?: true
    color?: true
    textColor?: true
    borderColor?: true
  }

  export type ResourceCategoryCountAggregateInputType = {
    id?: true
    title?: true
    icon?: true
    description?: true
    count?: true
    color?: true
    textColor?: true
    borderColor?: true
    _all?: true
  }

  export type ResourceCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResourceCategory to aggregate.
     */
    where?: ResourceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceCategories to fetch.
     */
    orderBy?: ResourceCategoryOrderByWithRelationInput | ResourceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResourceCategories
    **/
    _count?: true | ResourceCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResourceCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResourceCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceCategoryMaxAggregateInputType
  }

  export type GetResourceCategoryAggregateType<T extends ResourceCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateResourceCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResourceCategory[P]>
      : GetScalarType<T[P], AggregateResourceCategory[P]>
  }




  export type ResourceCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceCategoryWhereInput
    orderBy?: ResourceCategoryOrderByWithAggregationInput | ResourceCategoryOrderByWithAggregationInput[]
    by: ResourceCategoryScalarFieldEnum[] | ResourceCategoryScalarFieldEnum
    having?: ResourceCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceCategoryCountAggregateInputType | true
    _avg?: ResourceCategoryAvgAggregateInputType
    _sum?: ResourceCategorySumAggregateInputType
    _min?: ResourceCategoryMinAggregateInputType
    _max?: ResourceCategoryMaxAggregateInputType
  }

  export type ResourceCategoryGroupByOutputType = {
    id: string
    title: string
    icon: string | null
    description: string
    count: number
    color: string | null
    textColor: string | null
    borderColor: string | null
    _count: ResourceCategoryCountAggregateOutputType | null
    _avg: ResourceCategoryAvgAggregateOutputType | null
    _sum: ResourceCategorySumAggregateOutputType | null
    _min: ResourceCategoryMinAggregateOutputType | null
    _max: ResourceCategoryMaxAggregateOutputType | null
  }

  type GetResourceCategoryGroupByPayload<T extends ResourceCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ResourceCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    icon?: boolean
    description?: boolean
    count?: boolean
    color?: boolean
    textColor?: boolean
    borderColor?: boolean
  }, ExtArgs["result"]["resourceCategory"]>



  export type ResourceCategorySelectScalar = {
    id?: boolean
    title?: boolean
    icon?: boolean
    description?: boolean
    count?: boolean
    color?: boolean
    textColor?: boolean
    borderColor?: boolean
  }

  export type ResourceCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "icon" | "description" | "count" | "color" | "textColor" | "borderColor", ExtArgs["result"]["resourceCategory"]>

  export type $ResourceCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResourceCategory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      icon: string | null
      description: string
      count: number
      color: string | null
      textColor: string | null
      borderColor: string | null
    }, ExtArgs["result"]["resourceCategory"]>
    composites: {}
  }

  type ResourceCategoryGetPayload<S extends boolean | null | undefined | ResourceCategoryDefaultArgs> = $Result.GetResult<Prisma.$ResourceCategoryPayload, S>

  type ResourceCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResourceCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResourceCategoryCountAggregateInputType | true
    }

  export interface ResourceCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResourceCategory'], meta: { name: 'ResourceCategory' } }
    /**
     * Find zero or one ResourceCategory that matches the filter.
     * @param {ResourceCategoryFindUniqueArgs} args - Arguments to find a ResourceCategory
     * @example
     * // Get one ResourceCategory
     * const resourceCategory = await prisma.resourceCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResourceCategoryFindUniqueArgs>(args: SelectSubset<T, ResourceCategoryFindUniqueArgs<ExtArgs>>): Prisma__ResourceCategoryClient<$Result.GetResult<Prisma.$ResourceCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResourceCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResourceCategoryFindUniqueOrThrowArgs} args - Arguments to find a ResourceCategory
     * @example
     * // Get one ResourceCategory
     * const resourceCategory = await prisma.resourceCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResourceCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ResourceCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResourceCategoryClient<$Result.GetResult<Prisma.$ResourceCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResourceCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCategoryFindFirstArgs} args - Arguments to find a ResourceCategory
     * @example
     * // Get one ResourceCategory
     * const resourceCategory = await prisma.resourceCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResourceCategoryFindFirstArgs>(args?: SelectSubset<T, ResourceCategoryFindFirstArgs<ExtArgs>>): Prisma__ResourceCategoryClient<$Result.GetResult<Prisma.$ResourceCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResourceCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCategoryFindFirstOrThrowArgs} args - Arguments to find a ResourceCategory
     * @example
     * // Get one ResourceCategory
     * const resourceCategory = await prisma.resourceCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResourceCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ResourceCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResourceCategoryClient<$Result.GetResult<Prisma.$ResourceCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResourceCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResourceCategories
     * const resourceCategories = await prisma.resourceCategory.findMany()
     * 
     * // Get first 10 ResourceCategories
     * const resourceCategories = await prisma.resourceCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resourceCategoryWithIdOnly = await prisma.resourceCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResourceCategoryFindManyArgs>(args?: SelectSubset<T, ResourceCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResourceCategory.
     * @param {ResourceCategoryCreateArgs} args - Arguments to create a ResourceCategory.
     * @example
     * // Create one ResourceCategory
     * const ResourceCategory = await prisma.resourceCategory.create({
     *   data: {
     *     // ... data to create a ResourceCategory
     *   }
     * })
     * 
     */
    create<T extends ResourceCategoryCreateArgs>(args: SelectSubset<T, ResourceCategoryCreateArgs<ExtArgs>>): Prisma__ResourceCategoryClient<$Result.GetResult<Prisma.$ResourceCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResourceCategories.
     * @param {ResourceCategoryCreateManyArgs} args - Arguments to create many ResourceCategories.
     * @example
     * // Create many ResourceCategories
     * const resourceCategory = await prisma.resourceCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResourceCategoryCreateManyArgs>(args?: SelectSubset<T, ResourceCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ResourceCategory.
     * @param {ResourceCategoryDeleteArgs} args - Arguments to delete one ResourceCategory.
     * @example
     * // Delete one ResourceCategory
     * const ResourceCategory = await prisma.resourceCategory.delete({
     *   where: {
     *     // ... filter to delete one ResourceCategory
     *   }
     * })
     * 
     */
    delete<T extends ResourceCategoryDeleteArgs>(args: SelectSubset<T, ResourceCategoryDeleteArgs<ExtArgs>>): Prisma__ResourceCategoryClient<$Result.GetResult<Prisma.$ResourceCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResourceCategory.
     * @param {ResourceCategoryUpdateArgs} args - Arguments to update one ResourceCategory.
     * @example
     * // Update one ResourceCategory
     * const resourceCategory = await prisma.resourceCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResourceCategoryUpdateArgs>(args: SelectSubset<T, ResourceCategoryUpdateArgs<ExtArgs>>): Prisma__ResourceCategoryClient<$Result.GetResult<Prisma.$ResourceCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResourceCategories.
     * @param {ResourceCategoryDeleteManyArgs} args - Arguments to filter ResourceCategories to delete.
     * @example
     * // Delete a few ResourceCategories
     * const { count } = await prisma.resourceCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResourceCategoryDeleteManyArgs>(args?: SelectSubset<T, ResourceCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResourceCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResourceCategories
     * const resourceCategory = await prisma.resourceCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResourceCategoryUpdateManyArgs>(args: SelectSubset<T, ResourceCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResourceCategory.
     * @param {ResourceCategoryUpsertArgs} args - Arguments to update or create a ResourceCategory.
     * @example
     * // Update or create a ResourceCategory
     * const resourceCategory = await prisma.resourceCategory.upsert({
     *   create: {
     *     // ... data to create a ResourceCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResourceCategory we want to update
     *   }
     * })
     */
    upsert<T extends ResourceCategoryUpsertArgs>(args: SelectSubset<T, ResourceCategoryUpsertArgs<ExtArgs>>): Prisma__ResourceCategoryClient<$Result.GetResult<Prisma.$ResourceCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResourceCategories that matches the filter.
     * @param {ResourceCategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const resourceCategory = await prisma.resourceCategory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ResourceCategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ResourceCategory.
     * @param {ResourceCategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const resourceCategory = await prisma.resourceCategory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ResourceCategoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ResourceCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCategoryCountArgs} args - Arguments to filter ResourceCategories to count.
     * @example
     * // Count the number of ResourceCategories
     * const count = await prisma.resourceCategory.count({
     *   where: {
     *     // ... the filter for the ResourceCategories we want to count
     *   }
     * })
    **/
    count<T extends ResourceCategoryCountArgs>(
      args?: Subset<T, ResourceCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResourceCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResourceCategoryAggregateArgs>(args: Subset<T, ResourceCategoryAggregateArgs>): Prisma.PrismaPromise<GetResourceCategoryAggregateType<T>>

    /**
     * Group by ResourceCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResourceCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ResourceCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResourceCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResourceCategory model
   */
  readonly fields: ResourceCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResourceCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ResourceCategory model
   */
  interface ResourceCategoryFieldRefs {
    readonly id: FieldRef<"ResourceCategory", 'String'>
    readonly title: FieldRef<"ResourceCategory", 'String'>
    readonly icon: FieldRef<"ResourceCategory", 'String'>
    readonly description: FieldRef<"ResourceCategory", 'String'>
    readonly count: FieldRef<"ResourceCategory", 'Int'>
    readonly color: FieldRef<"ResourceCategory", 'String'>
    readonly textColor: FieldRef<"ResourceCategory", 'String'>
    readonly borderColor: FieldRef<"ResourceCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ResourceCategory findUnique
   */
  export type ResourceCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCategory
     */
    select?: ResourceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceCategory
     */
    omit?: ResourceCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ResourceCategory to fetch.
     */
    where: ResourceCategoryWhereUniqueInput
  }

  /**
   * ResourceCategory findUniqueOrThrow
   */
  export type ResourceCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCategory
     */
    select?: ResourceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceCategory
     */
    omit?: ResourceCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ResourceCategory to fetch.
     */
    where: ResourceCategoryWhereUniqueInput
  }

  /**
   * ResourceCategory findFirst
   */
  export type ResourceCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCategory
     */
    select?: ResourceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceCategory
     */
    omit?: ResourceCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ResourceCategory to fetch.
     */
    where?: ResourceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceCategories to fetch.
     */
    orderBy?: ResourceCategoryOrderByWithRelationInput | ResourceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResourceCategories.
     */
    cursor?: ResourceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceCategories.
     */
    distinct?: ResourceCategoryScalarFieldEnum | ResourceCategoryScalarFieldEnum[]
  }

  /**
   * ResourceCategory findFirstOrThrow
   */
  export type ResourceCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCategory
     */
    select?: ResourceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceCategory
     */
    omit?: ResourceCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ResourceCategory to fetch.
     */
    where?: ResourceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceCategories to fetch.
     */
    orderBy?: ResourceCategoryOrderByWithRelationInput | ResourceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResourceCategories.
     */
    cursor?: ResourceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceCategories.
     */
    distinct?: ResourceCategoryScalarFieldEnum | ResourceCategoryScalarFieldEnum[]
  }

  /**
   * ResourceCategory findMany
   */
  export type ResourceCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCategory
     */
    select?: ResourceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceCategory
     */
    omit?: ResourceCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ResourceCategories to fetch.
     */
    where?: ResourceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceCategories to fetch.
     */
    orderBy?: ResourceCategoryOrderByWithRelationInput | ResourceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResourceCategories.
     */
    cursor?: ResourceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceCategories.
     */
    skip?: number
    distinct?: ResourceCategoryScalarFieldEnum | ResourceCategoryScalarFieldEnum[]
  }

  /**
   * ResourceCategory create
   */
  export type ResourceCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCategory
     */
    select?: ResourceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceCategory
     */
    omit?: ResourceCategoryOmit<ExtArgs> | null
    /**
     * The data needed to create a ResourceCategory.
     */
    data: XOR<ResourceCategoryCreateInput, ResourceCategoryUncheckedCreateInput>
  }

  /**
   * ResourceCategory createMany
   */
  export type ResourceCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResourceCategories.
     */
    data: ResourceCategoryCreateManyInput | ResourceCategoryCreateManyInput[]
  }

  /**
   * ResourceCategory update
   */
  export type ResourceCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCategory
     */
    select?: ResourceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceCategory
     */
    omit?: ResourceCategoryOmit<ExtArgs> | null
    /**
     * The data needed to update a ResourceCategory.
     */
    data: XOR<ResourceCategoryUpdateInput, ResourceCategoryUncheckedUpdateInput>
    /**
     * Choose, which ResourceCategory to update.
     */
    where: ResourceCategoryWhereUniqueInput
  }

  /**
   * ResourceCategory updateMany
   */
  export type ResourceCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResourceCategories.
     */
    data: XOR<ResourceCategoryUpdateManyMutationInput, ResourceCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ResourceCategories to update
     */
    where?: ResourceCategoryWhereInput
    /**
     * Limit how many ResourceCategories to update.
     */
    limit?: number
  }

  /**
   * ResourceCategory upsert
   */
  export type ResourceCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCategory
     */
    select?: ResourceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceCategory
     */
    omit?: ResourceCategoryOmit<ExtArgs> | null
    /**
     * The filter to search for the ResourceCategory to update in case it exists.
     */
    where: ResourceCategoryWhereUniqueInput
    /**
     * In case the ResourceCategory found by the `where` argument doesn't exist, create a new ResourceCategory with this data.
     */
    create: XOR<ResourceCategoryCreateInput, ResourceCategoryUncheckedCreateInput>
    /**
     * In case the ResourceCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceCategoryUpdateInput, ResourceCategoryUncheckedUpdateInput>
  }

  /**
   * ResourceCategory delete
   */
  export type ResourceCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCategory
     */
    select?: ResourceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceCategory
     */
    omit?: ResourceCategoryOmit<ExtArgs> | null
    /**
     * Filter which ResourceCategory to delete.
     */
    where: ResourceCategoryWhereUniqueInput
  }

  /**
   * ResourceCategory deleteMany
   */
  export type ResourceCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResourceCategories to delete
     */
    where?: ResourceCategoryWhereInput
    /**
     * Limit how many ResourceCategories to delete.
     */
    limit?: number
  }

  /**
   * ResourceCategory findRaw
   */
  export type ResourceCategoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ResourceCategory aggregateRaw
   */
  export type ResourceCategoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ResourceCategory without action
   */
  export type ResourceCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCategory
     */
    select?: ResourceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceCategory
     */
    omit?: ResourceCategoryOmit<ExtArgs> | null
  }


  /**
   * Model InteractiveTool
   */

  export type AggregateInteractiveTool = {
    _count: InteractiveToolCountAggregateOutputType | null
    _min: InteractiveToolMinAggregateOutputType | null
    _max: InteractiveToolMaxAggregateOutputType | null
  }

  export type InteractiveToolMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    icon: string | null
    color: string | null
    textColor: string | null
    borderColor: string | null
    createdAt: Date | null
  }

  export type InteractiveToolMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    icon: string | null
    color: string | null
    textColor: string | null
    borderColor: string | null
    createdAt: Date | null
  }

  export type InteractiveToolCountAggregateOutputType = {
    id: number
    title: number
    description: number
    icon: number
    color: number
    textColor: number
    borderColor: number
    createdAt: number
    _all: number
  }


  export type InteractiveToolMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    icon?: true
    color?: true
    textColor?: true
    borderColor?: true
    createdAt?: true
  }

  export type InteractiveToolMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    icon?: true
    color?: true
    textColor?: true
    borderColor?: true
    createdAt?: true
  }

  export type InteractiveToolCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    icon?: true
    color?: true
    textColor?: true
    borderColor?: true
    createdAt?: true
    _all?: true
  }

  export type InteractiveToolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InteractiveTool to aggregate.
     */
    where?: InteractiveToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InteractiveTools to fetch.
     */
    orderBy?: InteractiveToolOrderByWithRelationInput | InteractiveToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InteractiveToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InteractiveTools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InteractiveTools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InteractiveTools
    **/
    _count?: true | InteractiveToolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InteractiveToolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InteractiveToolMaxAggregateInputType
  }

  export type GetInteractiveToolAggregateType<T extends InteractiveToolAggregateArgs> = {
        [P in keyof T & keyof AggregateInteractiveTool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInteractiveTool[P]>
      : GetScalarType<T[P], AggregateInteractiveTool[P]>
  }




  export type InteractiveToolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InteractiveToolWhereInput
    orderBy?: InteractiveToolOrderByWithAggregationInput | InteractiveToolOrderByWithAggregationInput[]
    by: InteractiveToolScalarFieldEnum[] | InteractiveToolScalarFieldEnum
    having?: InteractiveToolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InteractiveToolCountAggregateInputType | true
    _min?: InteractiveToolMinAggregateInputType
    _max?: InteractiveToolMaxAggregateInputType
  }

  export type InteractiveToolGroupByOutputType = {
    id: string
    title: string
    description: string
    icon: string | null
    color: string | null
    textColor: string | null
    borderColor: string | null
    createdAt: Date
    _count: InteractiveToolCountAggregateOutputType | null
    _min: InteractiveToolMinAggregateOutputType | null
    _max: InteractiveToolMaxAggregateOutputType | null
  }

  type GetInteractiveToolGroupByPayload<T extends InteractiveToolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InteractiveToolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InteractiveToolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InteractiveToolGroupByOutputType[P]>
            : GetScalarType<T[P], InteractiveToolGroupByOutputType[P]>
        }
      >
    >


  export type InteractiveToolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    color?: boolean
    textColor?: boolean
    borderColor?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["interactiveTool"]>



  export type InteractiveToolSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    color?: boolean
    textColor?: boolean
    borderColor?: boolean
    createdAt?: boolean
  }

  export type InteractiveToolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "icon" | "color" | "textColor" | "borderColor" | "createdAt", ExtArgs["result"]["interactiveTool"]>

  export type $InteractiveToolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InteractiveTool"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      icon: string | null
      color: string | null
      textColor: string | null
      borderColor: string | null
      createdAt: Date
    }, ExtArgs["result"]["interactiveTool"]>
    composites: {}
  }

  type InteractiveToolGetPayload<S extends boolean | null | undefined | InteractiveToolDefaultArgs> = $Result.GetResult<Prisma.$InteractiveToolPayload, S>

  type InteractiveToolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InteractiveToolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InteractiveToolCountAggregateInputType | true
    }

  export interface InteractiveToolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InteractiveTool'], meta: { name: 'InteractiveTool' } }
    /**
     * Find zero or one InteractiveTool that matches the filter.
     * @param {InteractiveToolFindUniqueArgs} args - Arguments to find a InteractiveTool
     * @example
     * // Get one InteractiveTool
     * const interactiveTool = await prisma.interactiveTool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InteractiveToolFindUniqueArgs>(args: SelectSubset<T, InteractiveToolFindUniqueArgs<ExtArgs>>): Prisma__InteractiveToolClient<$Result.GetResult<Prisma.$InteractiveToolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InteractiveTool that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InteractiveToolFindUniqueOrThrowArgs} args - Arguments to find a InteractiveTool
     * @example
     * // Get one InteractiveTool
     * const interactiveTool = await prisma.interactiveTool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InteractiveToolFindUniqueOrThrowArgs>(args: SelectSubset<T, InteractiveToolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InteractiveToolClient<$Result.GetResult<Prisma.$InteractiveToolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InteractiveTool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractiveToolFindFirstArgs} args - Arguments to find a InteractiveTool
     * @example
     * // Get one InteractiveTool
     * const interactiveTool = await prisma.interactiveTool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InteractiveToolFindFirstArgs>(args?: SelectSubset<T, InteractiveToolFindFirstArgs<ExtArgs>>): Prisma__InteractiveToolClient<$Result.GetResult<Prisma.$InteractiveToolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InteractiveTool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractiveToolFindFirstOrThrowArgs} args - Arguments to find a InteractiveTool
     * @example
     * // Get one InteractiveTool
     * const interactiveTool = await prisma.interactiveTool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InteractiveToolFindFirstOrThrowArgs>(args?: SelectSubset<T, InteractiveToolFindFirstOrThrowArgs<ExtArgs>>): Prisma__InteractiveToolClient<$Result.GetResult<Prisma.$InteractiveToolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InteractiveTools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractiveToolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InteractiveTools
     * const interactiveTools = await prisma.interactiveTool.findMany()
     * 
     * // Get first 10 InteractiveTools
     * const interactiveTools = await prisma.interactiveTool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interactiveToolWithIdOnly = await prisma.interactiveTool.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InteractiveToolFindManyArgs>(args?: SelectSubset<T, InteractiveToolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractiveToolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InteractiveTool.
     * @param {InteractiveToolCreateArgs} args - Arguments to create a InteractiveTool.
     * @example
     * // Create one InteractiveTool
     * const InteractiveTool = await prisma.interactiveTool.create({
     *   data: {
     *     // ... data to create a InteractiveTool
     *   }
     * })
     * 
     */
    create<T extends InteractiveToolCreateArgs>(args: SelectSubset<T, InteractiveToolCreateArgs<ExtArgs>>): Prisma__InteractiveToolClient<$Result.GetResult<Prisma.$InteractiveToolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InteractiveTools.
     * @param {InteractiveToolCreateManyArgs} args - Arguments to create many InteractiveTools.
     * @example
     * // Create many InteractiveTools
     * const interactiveTool = await prisma.interactiveTool.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InteractiveToolCreateManyArgs>(args?: SelectSubset<T, InteractiveToolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InteractiveTool.
     * @param {InteractiveToolDeleteArgs} args - Arguments to delete one InteractiveTool.
     * @example
     * // Delete one InteractiveTool
     * const InteractiveTool = await prisma.interactiveTool.delete({
     *   where: {
     *     // ... filter to delete one InteractiveTool
     *   }
     * })
     * 
     */
    delete<T extends InteractiveToolDeleteArgs>(args: SelectSubset<T, InteractiveToolDeleteArgs<ExtArgs>>): Prisma__InteractiveToolClient<$Result.GetResult<Prisma.$InteractiveToolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InteractiveTool.
     * @param {InteractiveToolUpdateArgs} args - Arguments to update one InteractiveTool.
     * @example
     * // Update one InteractiveTool
     * const interactiveTool = await prisma.interactiveTool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InteractiveToolUpdateArgs>(args: SelectSubset<T, InteractiveToolUpdateArgs<ExtArgs>>): Prisma__InteractiveToolClient<$Result.GetResult<Prisma.$InteractiveToolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InteractiveTools.
     * @param {InteractiveToolDeleteManyArgs} args - Arguments to filter InteractiveTools to delete.
     * @example
     * // Delete a few InteractiveTools
     * const { count } = await prisma.interactiveTool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InteractiveToolDeleteManyArgs>(args?: SelectSubset<T, InteractiveToolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InteractiveTools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractiveToolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InteractiveTools
     * const interactiveTool = await prisma.interactiveTool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InteractiveToolUpdateManyArgs>(args: SelectSubset<T, InteractiveToolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InteractiveTool.
     * @param {InteractiveToolUpsertArgs} args - Arguments to update or create a InteractiveTool.
     * @example
     * // Update or create a InteractiveTool
     * const interactiveTool = await prisma.interactiveTool.upsert({
     *   create: {
     *     // ... data to create a InteractiveTool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InteractiveTool we want to update
     *   }
     * })
     */
    upsert<T extends InteractiveToolUpsertArgs>(args: SelectSubset<T, InteractiveToolUpsertArgs<ExtArgs>>): Prisma__InteractiveToolClient<$Result.GetResult<Prisma.$InteractiveToolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InteractiveTools that matches the filter.
     * @param {InteractiveToolFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const interactiveTool = await prisma.interactiveTool.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: InteractiveToolFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a InteractiveTool.
     * @param {InteractiveToolAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const interactiveTool = await prisma.interactiveTool.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: InteractiveToolAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of InteractiveTools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractiveToolCountArgs} args - Arguments to filter InteractiveTools to count.
     * @example
     * // Count the number of InteractiveTools
     * const count = await prisma.interactiveTool.count({
     *   where: {
     *     // ... the filter for the InteractiveTools we want to count
     *   }
     * })
    **/
    count<T extends InteractiveToolCountArgs>(
      args?: Subset<T, InteractiveToolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InteractiveToolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InteractiveTool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractiveToolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InteractiveToolAggregateArgs>(args: Subset<T, InteractiveToolAggregateArgs>): Prisma.PrismaPromise<GetInteractiveToolAggregateType<T>>

    /**
     * Group by InteractiveTool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractiveToolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InteractiveToolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InteractiveToolGroupByArgs['orderBy'] }
        : { orderBy?: InteractiveToolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InteractiveToolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInteractiveToolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InteractiveTool model
   */
  readonly fields: InteractiveToolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InteractiveTool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InteractiveToolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InteractiveTool model
   */
  interface InteractiveToolFieldRefs {
    readonly id: FieldRef<"InteractiveTool", 'String'>
    readonly title: FieldRef<"InteractiveTool", 'String'>
    readonly description: FieldRef<"InteractiveTool", 'String'>
    readonly icon: FieldRef<"InteractiveTool", 'String'>
    readonly color: FieldRef<"InteractiveTool", 'String'>
    readonly textColor: FieldRef<"InteractiveTool", 'String'>
    readonly borderColor: FieldRef<"InteractiveTool", 'String'>
    readonly createdAt: FieldRef<"InteractiveTool", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InteractiveTool findUnique
   */
  export type InteractiveToolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InteractiveTool
     */
    select?: InteractiveToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InteractiveTool
     */
    omit?: InteractiveToolOmit<ExtArgs> | null
    /**
     * Filter, which InteractiveTool to fetch.
     */
    where: InteractiveToolWhereUniqueInput
  }

  /**
   * InteractiveTool findUniqueOrThrow
   */
  export type InteractiveToolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InteractiveTool
     */
    select?: InteractiveToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InteractiveTool
     */
    omit?: InteractiveToolOmit<ExtArgs> | null
    /**
     * Filter, which InteractiveTool to fetch.
     */
    where: InteractiveToolWhereUniqueInput
  }

  /**
   * InteractiveTool findFirst
   */
  export type InteractiveToolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InteractiveTool
     */
    select?: InteractiveToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InteractiveTool
     */
    omit?: InteractiveToolOmit<ExtArgs> | null
    /**
     * Filter, which InteractiveTool to fetch.
     */
    where?: InteractiveToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InteractiveTools to fetch.
     */
    orderBy?: InteractiveToolOrderByWithRelationInput | InteractiveToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InteractiveTools.
     */
    cursor?: InteractiveToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InteractiveTools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InteractiveTools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InteractiveTools.
     */
    distinct?: InteractiveToolScalarFieldEnum | InteractiveToolScalarFieldEnum[]
  }

  /**
   * InteractiveTool findFirstOrThrow
   */
  export type InteractiveToolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InteractiveTool
     */
    select?: InteractiveToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InteractiveTool
     */
    omit?: InteractiveToolOmit<ExtArgs> | null
    /**
     * Filter, which InteractiveTool to fetch.
     */
    where?: InteractiveToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InteractiveTools to fetch.
     */
    orderBy?: InteractiveToolOrderByWithRelationInput | InteractiveToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InteractiveTools.
     */
    cursor?: InteractiveToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InteractiveTools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InteractiveTools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InteractiveTools.
     */
    distinct?: InteractiveToolScalarFieldEnum | InteractiveToolScalarFieldEnum[]
  }

  /**
   * InteractiveTool findMany
   */
  export type InteractiveToolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InteractiveTool
     */
    select?: InteractiveToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InteractiveTool
     */
    omit?: InteractiveToolOmit<ExtArgs> | null
    /**
     * Filter, which InteractiveTools to fetch.
     */
    where?: InteractiveToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InteractiveTools to fetch.
     */
    orderBy?: InteractiveToolOrderByWithRelationInput | InteractiveToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InteractiveTools.
     */
    cursor?: InteractiveToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InteractiveTools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InteractiveTools.
     */
    skip?: number
    distinct?: InteractiveToolScalarFieldEnum | InteractiveToolScalarFieldEnum[]
  }

  /**
   * InteractiveTool create
   */
  export type InteractiveToolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InteractiveTool
     */
    select?: InteractiveToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InteractiveTool
     */
    omit?: InteractiveToolOmit<ExtArgs> | null
    /**
     * The data needed to create a InteractiveTool.
     */
    data: XOR<InteractiveToolCreateInput, InteractiveToolUncheckedCreateInput>
  }

  /**
   * InteractiveTool createMany
   */
  export type InteractiveToolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InteractiveTools.
     */
    data: InteractiveToolCreateManyInput | InteractiveToolCreateManyInput[]
  }

  /**
   * InteractiveTool update
   */
  export type InteractiveToolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InteractiveTool
     */
    select?: InteractiveToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InteractiveTool
     */
    omit?: InteractiveToolOmit<ExtArgs> | null
    /**
     * The data needed to update a InteractiveTool.
     */
    data: XOR<InteractiveToolUpdateInput, InteractiveToolUncheckedUpdateInput>
    /**
     * Choose, which InteractiveTool to update.
     */
    where: InteractiveToolWhereUniqueInput
  }

  /**
   * InteractiveTool updateMany
   */
  export type InteractiveToolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InteractiveTools.
     */
    data: XOR<InteractiveToolUpdateManyMutationInput, InteractiveToolUncheckedUpdateManyInput>
    /**
     * Filter which InteractiveTools to update
     */
    where?: InteractiveToolWhereInput
    /**
     * Limit how many InteractiveTools to update.
     */
    limit?: number
  }

  /**
   * InteractiveTool upsert
   */
  export type InteractiveToolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InteractiveTool
     */
    select?: InteractiveToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InteractiveTool
     */
    omit?: InteractiveToolOmit<ExtArgs> | null
    /**
     * The filter to search for the InteractiveTool to update in case it exists.
     */
    where: InteractiveToolWhereUniqueInput
    /**
     * In case the InteractiveTool found by the `where` argument doesn't exist, create a new InteractiveTool with this data.
     */
    create: XOR<InteractiveToolCreateInput, InteractiveToolUncheckedCreateInput>
    /**
     * In case the InteractiveTool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InteractiveToolUpdateInput, InteractiveToolUncheckedUpdateInput>
  }

  /**
   * InteractiveTool delete
   */
  export type InteractiveToolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InteractiveTool
     */
    select?: InteractiveToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InteractiveTool
     */
    omit?: InteractiveToolOmit<ExtArgs> | null
    /**
     * Filter which InteractiveTool to delete.
     */
    where: InteractiveToolWhereUniqueInput
  }

  /**
   * InteractiveTool deleteMany
   */
  export type InteractiveToolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InteractiveTools to delete
     */
    where?: InteractiveToolWhereInput
    /**
     * Limit how many InteractiveTools to delete.
     */
    limit?: number
  }

  /**
   * InteractiveTool findRaw
   */
  export type InteractiveToolFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * InteractiveTool aggregateRaw
   */
  export type InteractiveToolAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * InteractiveTool without action
   */
  export type InteractiveToolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InteractiveTool
     */
    select?: InteractiveToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InteractiveTool
     */
    omit?: InteractiveToolOmit<ExtArgs> | null
  }


  /**
   * Model DownloadableResource
   */

  export type AggregateDownloadableResource = {
    _count: DownloadableResourceCountAggregateOutputType | null
    _avg: DownloadableResourceAvgAggregateOutputType | null
    _sum: DownloadableResourceSumAggregateOutputType | null
    _min: DownloadableResourceMinAggregateOutputType | null
    _max: DownloadableResourceMaxAggregateOutputType | null
  }

  export type DownloadableResourceAvgAggregateOutputType = {
    downloads: number | null
  }

  export type DownloadableResourceSumAggregateOutputType = {
    downloads: number | null
  }

  export type DownloadableResourceMinAggregateOutputType = {
    id: string | null
    title: string | null
    type: string | null
    category: string | null
    description: string | null
    downloads: number | null
    createdAt: Date | null
  }

  export type DownloadableResourceMaxAggregateOutputType = {
    id: string | null
    title: string | null
    type: string | null
    category: string | null
    description: string | null
    downloads: number | null
    createdAt: Date | null
  }

  export type DownloadableResourceCountAggregateOutputType = {
    id: number
    title: number
    type: number
    category: number
    description: number
    downloads: number
    image: number
    createdAt: number
    _all: number
  }


  export type DownloadableResourceAvgAggregateInputType = {
    downloads?: true
  }

  export type DownloadableResourceSumAggregateInputType = {
    downloads?: true
  }

  export type DownloadableResourceMinAggregateInputType = {
    id?: true
    title?: true
    type?: true
    category?: true
    description?: true
    downloads?: true
    createdAt?: true
  }

  export type DownloadableResourceMaxAggregateInputType = {
    id?: true
    title?: true
    type?: true
    category?: true
    description?: true
    downloads?: true
    createdAt?: true
  }

  export type DownloadableResourceCountAggregateInputType = {
    id?: true
    title?: true
    type?: true
    category?: true
    description?: true
    downloads?: true
    image?: true
    createdAt?: true
    _all?: true
  }

  export type DownloadableResourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DownloadableResource to aggregate.
     */
    where?: DownloadableResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DownloadableResources to fetch.
     */
    orderBy?: DownloadableResourceOrderByWithRelationInput | DownloadableResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DownloadableResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DownloadableResources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DownloadableResources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DownloadableResources
    **/
    _count?: true | DownloadableResourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DownloadableResourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DownloadableResourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DownloadableResourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DownloadableResourceMaxAggregateInputType
  }

  export type GetDownloadableResourceAggregateType<T extends DownloadableResourceAggregateArgs> = {
        [P in keyof T & keyof AggregateDownloadableResource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDownloadableResource[P]>
      : GetScalarType<T[P], AggregateDownloadableResource[P]>
  }




  export type DownloadableResourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DownloadableResourceWhereInput
    orderBy?: DownloadableResourceOrderByWithAggregationInput | DownloadableResourceOrderByWithAggregationInput[]
    by: DownloadableResourceScalarFieldEnum[] | DownloadableResourceScalarFieldEnum
    having?: DownloadableResourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DownloadableResourceCountAggregateInputType | true
    _avg?: DownloadableResourceAvgAggregateInputType
    _sum?: DownloadableResourceSumAggregateInputType
    _min?: DownloadableResourceMinAggregateInputType
    _max?: DownloadableResourceMaxAggregateInputType
  }

  export type DownloadableResourceGroupByOutputType = {
    id: string
    title: string
    type: string
    category: string
    description: string
    downloads: number
    image: string[]
    createdAt: Date
    _count: DownloadableResourceCountAggregateOutputType | null
    _avg: DownloadableResourceAvgAggregateOutputType | null
    _sum: DownloadableResourceSumAggregateOutputType | null
    _min: DownloadableResourceMinAggregateOutputType | null
    _max: DownloadableResourceMaxAggregateOutputType | null
  }

  type GetDownloadableResourceGroupByPayload<T extends DownloadableResourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DownloadableResourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DownloadableResourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DownloadableResourceGroupByOutputType[P]>
            : GetScalarType<T[P], DownloadableResourceGroupByOutputType[P]>
        }
      >
    >


  export type DownloadableResourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    category?: boolean
    description?: boolean
    downloads?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["downloadableResource"]>



  export type DownloadableResourceSelectScalar = {
    id?: boolean
    title?: boolean
    type?: boolean
    category?: boolean
    description?: boolean
    downloads?: boolean
    image?: boolean
    createdAt?: boolean
  }

  export type DownloadableResourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "type" | "category" | "description" | "downloads" | "image" | "createdAt", ExtArgs["result"]["downloadableResource"]>

  export type $DownloadableResourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DownloadableResource"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      type: string
      category: string
      description: string
      downloads: number
      image: string[]
      createdAt: Date
    }, ExtArgs["result"]["downloadableResource"]>
    composites: {}
  }

  type DownloadableResourceGetPayload<S extends boolean | null | undefined | DownloadableResourceDefaultArgs> = $Result.GetResult<Prisma.$DownloadableResourcePayload, S>

  type DownloadableResourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DownloadableResourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DownloadableResourceCountAggregateInputType | true
    }

  export interface DownloadableResourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DownloadableResource'], meta: { name: 'DownloadableResource' } }
    /**
     * Find zero or one DownloadableResource that matches the filter.
     * @param {DownloadableResourceFindUniqueArgs} args - Arguments to find a DownloadableResource
     * @example
     * // Get one DownloadableResource
     * const downloadableResource = await prisma.downloadableResource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DownloadableResourceFindUniqueArgs>(args: SelectSubset<T, DownloadableResourceFindUniqueArgs<ExtArgs>>): Prisma__DownloadableResourceClient<$Result.GetResult<Prisma.$DownloadableResourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DownloadableResource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DownloadableResourceFindUniqueOrThrowArgs} args - Arguments to find a DownloadableResource
     * @example
     * // Get one DownloadableResource
     * const downloadableResource = await prisma.downloadableResource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DownloadableResourceFindUniqueOrThrowArgs>(args: SelectSubset<T, DownloadableResourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DownloadableResourceClient<$Result.GetResult<Prisma.$DownloadableResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DownloadableResource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownloadableResourceFindFirstArgs} args - Arguments to find a DownloadableResource
     * @example
     * // Get one DownloadableResource
     * const downloadableResource = await prisma.downloadableResource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DownloadableResourceFindFirstArgs>(args?: SelectSubset<T, DownloadableResourceFindFirstArgs<ExtArgs>>): Prisma__DownloadableResourceClient<$Result.GetResult<Prisma.$DownloadableResourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DownloadableResource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownloadableResourceFindFirstOrThrowArgs} args - Arguments to find a DownloadableResource
     * @example
     * // Get one DownloadableResource
     * const downloadableResource = await prisma.downloadableResource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DownloadableResourceFindFirstOrThrowArgs>(args?: SelectSubset<T, DownloadableResourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DownloadableResourceClient<$Result.GetResult<Prisma.$DownloadableResourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DownloadableResources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownloadableResourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DownloadableResources
     * const downloadableResources = await prisma.downloadableResource.findMany()
     * 
     * // Get first 10 DownloadableResources
     * const downloadableResources = await prisma.downloadableResource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const downloadableResourceWithIdOnly = await prisma.downloadableResource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DownloadableResourceFindManyArgs>(args?: SelectSubset<T, DownloadableResourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DownloadableResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DownloadableResource.
     * @param {DownloadableResourceCreateArgs} args - Arguments to create a DownloadableResource.
     * @example
     * // Create one DownloadableResource
     * const DownloadableResource = await prisma.downloadableResource.create({
     *   data: {
     *     // ... data to create a DownloadableResource
     *   }
     * })
     * 
     */
    create<T extends DownloadableResourceCreateArgs>(args: SelectSubset<T, DownloadableResourceCreateArgs<ExtArgs>>): Prisma__DownloadableResourceClient<$Result.GetResult<Prisma.$DownloadableResourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DownloadableResources.
     * @param {DownloadableResourceCreateManyArgs} args - Arguments to create many DownloadableResources.
     * @example
     * // Create many DownloadableResources
     * const downloadableResource = await prisma.downloadableResource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DownloadableResourceCreateManyArgs>(args?: SelectSubset<T, DownloadableResourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DownloadableResource.
     * @param {DownloadableResourceDeleteArgs} args - Arguments to delete one DownloadableResource.
     * @example
     * // Delete one DownloadableResource
     * const DownloadableResource = await prisma.downloadableResource.delete({
     *   where: {
     *     // ... filter to delete one DownloadableResource
     *   }
     * })
     * 
     */
    delete<T extends DownloadableResourceDeleteArgs>(args: SelectSubset<T, DownloadableResourceDeleteArgs<ExtArgs>>): Prisma__DownloadableResourceClient<$Result.GetResult<Prisma.$DownloadableResourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DownloadableResource.
     * @param {DownloadableResourceUpdateArgs} args - Arguments to update one DownloadableResource.
     * @example
     * // Update one DownloadableResource
     * const downloadableResource = await prisma.downloadableResource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DownloadableResourceUpdateArgs>(args: SelectSubset<T, DownloadableResourceUpdateArgs<ExtArgs>>): Prisma__DownloadableResourceClient<$Result.GetResult<Prisma.$DownloadableResourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DownloadableResources.
     * @param {DownloadableResourceDeleteManyArgs} args - Arguments to filter DownloadableResources to delete.
     * @example
     * // Delete a few DownloadableResources
     * const { count } = await prisma.downloadableResource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DownloadableResourceDeleteManyArgs>(args?: SelectSubset<T, DownloadableResourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DownloadableResources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownloadableResourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DownloadableResources
     * const downloadableResource = await prisma.downloadableResource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DownloadableResourceUpdateManyArgs>(args: SelectSubset<T, DownloadableResourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DownloadableResource.
     * @param {DownloadableResourceUpsertArgs} args - Arguments to update or create a DownloadableResource.
     * @example
     * // Update or create a DownloadableResource
     * const downloadableResource = await prisma.downloadableResource.upsert({
     *   create: {
     *     // ... data to create a DownloadableResource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DownloadableResource we want to update
     *   }
     * })
     */
    upsert<T extends DownloadableResourceUpsertArgs>(args: SelectSubset<T, DownloadableResourceUpsertArgs<ExtArgs>>): Prisma__DownloadableResourceClient<$Result.GetResult<Prisma.$DownloadableResourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DownloadableResources that matches the filter.
     * @param {DownloadableResourceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const downloadableResource = await prisma.downloadableResource.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DownloadableResourceFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DownloadableResource.
     * @param {DownloadableResourceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const downloadableResource = await prisma.downloadableResource.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DownloadableResourceAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of DownloadableResources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownloadableResourceCountArgs} args - Arguments to filter DownloadableResources to count.
     * @example
     * // Count the number of DownloadableResources
     * const count = await prisma.downloadableResource.count({
     *   where: {
     *     // ... the filter for the DownloadableResources we want to count
     *   }
     * })
    **/
    count<T extends DownloadableResourceCountArgs>(
      args?: Subset<T, DownloadableResourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DownloadableResourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DownloadableResource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownloadableResourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DownloadableResourceAggregateArgs>(args: Subset<T, DownloadableResourceAggregateArgs>): Prisma.PrismaPromise<GetDownloadableResourceAggregateType<T>>

    /**
     * Group by DownloadableResource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownloadableResourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DownloadableResourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DownloadableResourceGroupByArgs['orderBy'] }
        : { orderBy?: DownloadableResourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DownloadableResourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDownloadableResourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DownloadableResource model
   */
  readonly fields: DownloadableResourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DownloadableResource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DownloadableResourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DownloadableResource model
   */
  interface DownloadableResourceFieldRefs {
    readonly id: FieldRef<"DownloadableResource", 'String'>
    readonly title: FieldRef<"DownloadableResource", 'String'>
    readonly type: FieldRef<"DownloadableResource", 'String'>
    readonly category: FieldRef<"DownloadableResource", 'String'>
    readonly description: FieldRef<"DownloadableResource", 'String'>
    readonly downloads: FieldRef<"DownloadableResource", 'Int'>
    readonly image: FieldRef<"DownloadableResource", 'String[]'>
    readonly createdAt: FieldRef<"DownloadableResource", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DownloadableResource findUnique
   */
  export type DownloadableResourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DownloadableResource
     */
    select?: DownloadableResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DownloadableResource
     */
    omit?: DownloadableResourceOmit<ExtArgs> | null
    /**
     * Filter, which DownloadableResource to fetch.
     */
    where: DownloadableResourceWhereUniqueInput
  }

  /**
   * DownloadableResource findUniqueOrThrow
   */
  export type DownloadableResourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DownloadableResource
     */
    select?: DownloadableResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DownloadableResource
     */
    omit?: DownloadableResourceOmit<ExtArgs> | null
    /**
     * Filter, which DownloadableResource to fetch.
     */
    where: DownloadableResourceWhereUniqueInput
  }

  /**
   * DownloadableResource findFirst
   */
  export type DownloadableResourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DownloadableResource
     */
    select?: DownloadableResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DownloadableResource
     */
    omit?: DownloadableResourceOmit<ExtArgs> | null
    /**
     * Filter, which DownloadableResource to fetch.
     */
    where?: DownloadableResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DownloadableResources to fetch.
     */
    orderBy?: DownloadableResourceOrderByWithRelationInput | DownloadableResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DownloadableResources.
     */
    cursor?: DownloadableResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DownloadableResources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DownloadableResources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DownloadableResources.
     */
    distinct?: DownloadableResourceScalarFieldEnum | DownloadableResourceScalarFieldEnum[]
  }

  /**
   * DownloadableResource findFirstOrThrow
   */
  export type DownloadableResourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DownloadableResource
     */
    select?: DownloadableResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DownloadableResource
     */
    omit?: DownloadableResourceOmit<ExtArgs> | null
    /**
     * Filter, which DownloadableResource to fetch.
     */
    where?: DownloadableResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DownloadableResources to fetch.
     */
    orderBy?: DownloadableResourceOrderByWithRelationInput | DownloadableResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DownloadableResources.
     */
    cursor?: DownloadableResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DownloadableResources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DownloadableResources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DownloadableResources.
     */
    distinct?: DownloadableResourceScalarFieldEnum | DownloadableResourceScalarFieldEnum[]
  }

  /**
   * DownloadableResource findMany
   */
  export type DownloadableResourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DownloadableResource
     */
    select?: DownloadableResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DownloadableResource
     */
    omit?: DownloadableResourceOmit<ExtArgs> | null
    /**
     * Filter, which DownloadableResources to fetch.
     */
    where?: DownloadableResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DownloadableResources to fetch.
     */
    orderBy?: DownloadableResourceOrderByWithRelationInput | DownloadableResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DownloadableResources.
     */
    cursor?: DownloadableResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DownloadableResources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DownloadableResources.
     */
    skip?: number
    distinct?: DownloadableResourceScalarFieldEnum | DownloadableResourceScalarFieldEnum[]
  }

  /**
   * DownloadableResource create
   */
  export type DownloadableResourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DownloadableResource
     */
    select?: DownloadableResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DownloadableResource
     */
    omit?: DownloadableResourceOmit<ExtArgs> | null
    /**
     * The data needed to create a DownloadableResource.
     */
    data: XOR<DownloadableResourceCreateInput, DownloadableResourceUncheckedCreateInput>
  }

  /**
   * DownloadableResource createMany
   */
  export type DownloadableResourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DownloadableResources.
     */
    data: DownloadableResourceCreateManyInput | DownloadableResourceCreateManyInput[]
  }

  /**
   * DownloadableResource update
   */
  export type DownloadableResourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DownloadableResource
     */
    select?: DownloadableResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DownloadableResource
     */
    omit?: DownloadableResourceOmit<ExtArgs> | null
    /**
     * The data needed to update a DownloadableResource.
     */
    data: XOR<DownloadableResourceUpdateInput, DownloadableResourceUncheckedUpdateInput>
    /**
     * Choose, which DownloadableResource to update.
     */
    where: DownloadableResourceWhereUniqueInput
  }

  /**
   * DownloadableResource updateMany
   */
  export type DownloadableResourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DownloadableResources.
     */
    data: XOR<DownloadableResourceUpdateManyMutationInput, DownloadableResourceUncheckedUpdateManyInput>
    /**
     * Filter which DownloadableResources to update
     */
    where?: DownloadableResourceWhereInput
    /**
     * Limit how many DownloadableResources to update.
     */
    limit?: number
  }

  /**
   * DownloadableResource upsert
   */
  export type DownloadableResourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DownloadableResource
     */
    select?: DownloadableResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DownloadableResource
     */
    omit?: DownloadableResourceOmit<ExtArgs> | null
    /**
     * The filter to search for the DownloadableResource to update in case it exists.
     */
    where: DownloadableResourceWhereUniqueInput
    /**
     * In case the DownloadableResource found by the `where` argument doesn't exist, create a new DownloadableResource with this data.
     */
    create: XOR<DownloadableResourceCreateInput, DownloadableResourceUncheckedCreateInput>
    /**
     * In case the DownloadableResource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DownloadableResourceUpdateInput, DownloadableResourceUncheckedUpdateInput>
  }

  /**
   * DownloadableResource delete
   */
  export type DownloadableResourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DownloadableResource
     */
    select?: DownloadableResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DownloadableResource
     */
    omit?: DownloadableResourceOmit<ExtArgs> | null
    /**
     * Filter which DownloadableResource to delete.
     */
    where: DownloadableResourceWhereUniqueInput
  }

  /**
   * DownloadableResource deleteMany
   */
  export type DownloadableResourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DownloadableResources to delete
     */
    where?: DownloadableResourceWhereInput
    /**
     * Limit how many DownloadableResources to delete.
     */
    limit?: number
  }

  /**
   * DownloadableResource findRaw
   */
  export type DownloadableResourceFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DownloadableResource aggregateRaw
   */
  export type DownloadableResourceAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DownloadableResource without action
   */
  export type DownloadableResourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DownloadableResource
     */
    select?: DownloadableResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DownloadableResource
     */
    omit?: DownloadableResourceOmit<ExtArgs> | null
  }


  /**
   * Model ShopCategory
   */

  export type AggregateShopCategory = {
    _count: ShopCategoryCountAggregateOutputType | null
    _avg: ShopCategoryAvgAggregateOutputType | null
    _sum: ShopCategorySumAggregateOutputType | null
    _min: ShopCategoryMinAggregateOutputType | null
    _max: ShopCategoryMaxAggregateOutputType | null
  }

  export type ShopCategoryAvgAggregateOutputType = {
    count: number | null
  }

  export type ShopCategorySumAggregateOutputType = {
    count: number | null
  }

  export type ShopCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    count: number | null
    createdAt: Date | null
  }

  export type ShopCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    count: number | null
    createdAt: Date | null
  }

  export type ShopCategoryCountAggregateOutputType = {
    id: number
    name: number
    count: number
    createdAt: number
    _all: number
  }


  export type ShopCategoryAvgAggregateInputType = {
    count?: true
  }

  export type ShopCategorySumAggregateInputType = {
    count?: true
  }

  export type ShopCategoryMinAggregateInputType = {
    id?: true
    name?: true
    count?: true
    createdAt?: true
  }

  export type ShopCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    count?: true
    createdAt?: true
  }

  export type ShopCategoryCountAggregateInputType = {
    id?: true
    name?: true
    count?: true
    createdAt?: true
    _all?: true
  }

  export type ShopCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopCategory to aggregate.
     */
    where?: ShopCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopCategories to fetch.
     */
    orderBy?: ShopCategoryOrderByWithRelationInput | ShopCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShopCategories
    **/
    _count?: true | ShopCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopCategoryMaxAggregateInputType
  }

  export type GetShopCategoryAggregateType<T extends ShopCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateShopCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopCategory[P]>
      : GetScalarType<T[P], AggregateShopCategory[P]>
  }




  export type ShopCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopCategoryWhereInput
    orderBy?: ShopCategoryOrderByWithAggregationInput | ShopCategoryOrderByWithAggregationInput[]
    by: ShopCategoryScalarFieldEnum[] | ShopCategoryScalarFieldEnum
    having?: ShopCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopCategoryCountAggregateInputType | true
    _avg?: ShopCategoryAvgAggregateInputType
    _sum?: ShopCategorySumAggregateInputType
    _min?: ShopCategoryMinAggregateInputType
    _max?: ShopCategoryMaxAggregateInputType
  }

  export type ShopCategoryGroupByOutputType = {
    id: string
    name: string
    count: number
    createdAt: Date
    _count: ShopCategoryCountAggregateOutputType | null
    _avg: ShopCategoryAvgAggregateOutputType | null
    _sum: ShopCategorySumAggregateOutputType | null
    _min: ShopCategoryMinAggregateOutputType | null
    _max: ShopCategoryMaxAggregateOutputType | null
  }

  type GetShopCategoryGroupByPayload<T extends ShopCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ShopCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ShopCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    count?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["shopCategory"]>



  export type ShopCategorySelectScalar = {
    id?: boolean
    name?: boolean
    count?: boolean
    createdAt?: boolean
  }

  export type ShopCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "count" | "createdAt", ExtArgs["result"]["shopCategory"]>

  export type $ShopCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShopCategory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      count: number
      createdAt: Date
    }, ExtArgs["result"]["shopCategory"]>
    composites: {}
  }

  type ShopCategoryGetPayload<S extends boolean | null | undefined | ShopCategoryDefaultArgs> = $Result.GetResult<Prisma.$ShopCategoryPayload, S>

  type ShopCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopCategoryCountAggregateInputType | true
    }

  export interface ShopCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShopCategory'], meta: { name: 'ShopCategory' } }
    /**
     * Find zero or one ShopCategory that matches the filter.
     * @param {ShopCategoryFindUniqueArgs} args - Arguments to find a ShopCategory
     * @example
     * // Get one ShopCategory
     * const shopCategory = await prisma.shopCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopCategoryFindUniqueArgs>(args: SelectSubset<T, ShopCategoryFindUniqueArgs<ExtArgs>>): Prisma__ShopCategoryClient<$Result.GetResult<Prisma.$ShopCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShopCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopCategoryFindUniqueOrThrowArgs} args - Arguments to find a ShopCategory
     * @example
     * // Get one ShopCategory
     * const shopCategory = await prisma.shopCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopCategoryClient<$Result.GetResult<Prisma.$ShopCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCategoryFindFirstArgs} args - Arguments to find a ShopCategory
     * @example
     * // Get one ShopCategory
     * const shopCategory = await prisma.shopCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopCategoryFindFirstArgs>(args?: SelectSubset<T, ShopCategoryFindFirstArgs<ExtArgs>>): Prisma__ShopCategoryClient<$Result.GetResult<Prisma.$ShopCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCategoryFindFirstOrThrowArgs} args - Arguments to find a ShopCategory
     * @example
     * // Get one ShopCategory
     * const shopCategory = await prisma.shopCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopCategoryClient<$Result.GetResult<Prisma.$ShopCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShopCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopCategories
     * const shopCategories = await prisma.shopCategory.findMany()
     * 
     * // Get first 10 ShopCategories
     * const shopCategories = await prisma.shopCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopCategoryWithIdOnly = await prisma.shopCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopCategoryFindManyArgs>(args?: SelectSubset<T, ShopCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShopCategory.
     * @param {ShopCategoryCreateArgs} args - Arguments to create a ShopCategory.
     * @example
     * // Create one ShopCategory
     * const ShopCategory = await prisma.shopCategory.create({
     *   data: {
     *     // ... data to create a ShopCategory
     *   }
     * })
     * 
     */
    create<T extends ShopCategoryCreateArgs>(args: SelectSubset<T, ShopCategoryCreateArgs<ExtArgs>>): Prisma__ShopCategoryClient<$Result.GetResult<Prisma.$ShopCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShopCategories.
     * @param {ShopCategoryCreateManyArgs} args - Arguments to create many ShopCategories.
     * @example
     * // Create many ShopCategories
     * const shopCategory = await prisma.shopCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopCategoryCreateManyArgs>(args?: SelectSubset<T, ShopCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShopCategory.
     * @param {ShopCategoryDeleteArgs} args - Arguments to delete one ShopCategory.
     * @example
     * // Delete one ShopCategory
     * const ShopCategory = await prisma.shopCategory.delete({
     *   where: {
     *     // ... filter to delete one ShopCategory
     *   }
     * })
     * 
     */
    delete<T extends ShopCategoryDeleteArgs>(args: SelectSubset<T, ShopCategoryDeleteArgs<ExtArgs>>): Prisma__ShopCategoryClient<$Result.GetResult<Prisma.$ShopCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShopCategory.
     * @param {ShopCategoryUpdateArgs} args - Arguments to update one ShopCategory.
     * @example
     * // Update one ShopCategory
     * const shopCategory = await prisma.shopCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopCategoryUpdateArgs>(args: SelectSubset<T, ShopCategoryUpdateArgs<ExtArgs>>): Prisma__ShopCategoryClient<$Result.GetResult<Prisma.$ShopCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShopCategories.
     * @param {ShopCategoryDeleteManyArgs} args - Arguments to filter ShopCategories to delete.
     * @example
     * // Delete a few ShopCategories
     * const { count } = await prisma.shopCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopCategoryDeleteManyArgs>(args?: SelectSubset<T, ShopCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopCategories
     * const shopCategory = await prisma.shopCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopCategoryUpdateManyArgs>(args: SelectSubset<T, ShopCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShopCategory.
     * @param {ShopCategoryUpsertArgs} args - Arguments to update or create a ShopCategory.
     * @example
     * // Update or create a ShopCategory
     * const shopCategory = await prisma.shopCategory.upsert({
     *   create: {
     *     // ... data to create a ShopCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopCategory we want to update
     *   }
     * })
     */
    upsert<T extends ShopCategoryUpsertArgs>(args: SelectSubset<T, ShopCategoryUpsertArgs<ExtArgs>>): Prisma__ShopCategoryClient<$Result.GetResult<Prisma.$ShopCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShopCategories that matches the filter.
     * @param {ShopCategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const shopCategory = await prisma.shopCategory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ShopCategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ShopCategory.
     * @param {ShopCategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const shopCategory = await prisma.shopCategory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ShopCategoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ShopCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCategoryCountArgs} args - Arguments to filter ShopCategories to count.
     * @example
     * // Count the number of ShopCategories
     * const count = await prisma.shopCategory.count({
     *   where: {
     *     // ... the filter for the ShopCategories we want to count
     *   }
     * })
    **/
    count<T extends ShopCategoryCountArgs>(
      args?: Subset<T, ShopCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShopCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopCategoryAggregateArgs>(args: Subset<T, ShopCategoryAggregateArgs>): Prisma.PrismaPromise<GetShopCategoryAggregateType<T>>

    /**
     * Group by ShopCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShopCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ShopCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShopCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShopCategory model
   */
  readonly fields: ShopCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShopCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShopCategory model
   */
  interface ShopCategoryFieldRefs {
    readonly id: FieldRef<"ShopCategory", 'String'>
    readonly name: FieldRef<"ShopCategory", 'String'>
    readonly count: FieldRef<"ShopCategory", 'Int'>
    readonly createdAt: FieldRef<"ShopCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShopCategory findUnique
   */
  export type ShopCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCategory
     */
    select?: ShopCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopCategory
     */
    omit?: ShopCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ShopCategory to fetch.
     */
    where: ShopCategoryWhereUniqueInput
  }

  /**
   * ShopCategory findUniqueOrThrow
   */
  export type ShopCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCategory
     */
    select?: ShopCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopCategory
     */
    omit?: ShopCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ShopCategory to fetch.
     */
    where: ShopCategoryWhereUniqueInput
  }

  /**
   * ShopCategory findFirst
   */
  export type ShopCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCategory
     */
    select?: ShopCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopCategory
     */
    omit?: ShopCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ShopCategory to fetch.
     */
    where?: ShopCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopCategories to fetch.
     */
    orderBy?: ShopCategoryOrderByWithRelationInput | ShopCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopCategories.
     */
    cursor?: ShopCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopCategories.
     */
    distinct?: ShopCategoryScalarFieldEnum | ShopCategoryScalarFieldEnum[]
  }

  /**
   * ShopCategory findFirstOrThrow
   */
  export type ShopCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCategory
     */
    select?: ShopCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopCategory
     */
    omit?: ShopCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ShopCategory to fetch.
     */
    where?: ShopCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopCategories to fetch.
     */
    orderBy?: ShopCategoryOrderByWithRelationInput | ShopCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopCategories.
     */
    cursor?: ShopCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopCategories.
     */
    distinct?: ShopCategoryScalarFieldEnum | ShopCategoryScalarFieldEnum[]
  }

  /**
   * ShopCategory findMany
   */
  export type ShopCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCategory
     */
    select?: ShopCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopCategory
     */
    omit?: ShopCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ShopCategories to fetch.
     */
    where?: ShopCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopCategories to fetch.
     */
    orderBy?: ShopCategoryOrderByWithRelationInput | ShopCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShopCategories.
     */
    cursor?: ShopCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopCategories.
     */
    skip?: number
    distinct?: ShopCategoryScalarFieldEnum | ShopCategoryScalarFieldEnum[]
  }

  /**
   * ShopCategory create
   */
  export type ShopCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCategory
     */
    select?: ShopCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopCategory
     */
    omit?: ShopCategoryOmit<ExtArgs> | null
    /**
     * The data needed to create a ShopCategory.
     */
    data: XOR<ShopCategoryCreateInput, ShopCategoryUncheckedCreateInput>
  }

  /**
   * ShopCategory createMany
   */
  export type ShopCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopCategories.
     */
    data: ShopCategoryCreateManyInput | ShopCategoryCreateManyInput[]
  }

  /**
   * ShopCategory update
   */
  export type ShopCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCategory
     */
    select?: ShopCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopCategory
     */
    omit?: ShopCategoryOmit<ExtArgs> | null
    /**
     * The data needed to update a ShopCategory.
     */
    data: XOR<ShopCategoryUpdateInput, ShopCategoryUncheckedUpdateInput>
    /**
     * Choose, which ShopCategory to update.
     */
    where: ShopCategoryWhereUniqueInput
  }

  /**
   * ShopCategory updateMany
   */
  export type ShopCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopCategories.
     */
    data: XOR<ShopCategoryUpdateManyMutationInput, ShopCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ShopCategories to update
     */
    where?: ShopCategoryWhereInput
    /**
     * Limit how many ShopCategories to update.
     */
    limit?: number
  }

  /**
   * ShopCategory upsert
   */
  export type ShopCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCategory
     */
    select?: ShopCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopCategory
     */
    omit?: ShopCategoryOmit<ExtArgs> | null
    /**
     * The filter to search for the ShopCategory to update in case it exists.
     */
    where: ShopCategoryWhereUniqueInput
    /**
     * In case the ShopCategory found by the `where` argument doesn't exist, create a new ShopCategory with this data.
     */
    create: XOR<ShopCategoryCreateInput, ShopCategoryUncheckedCreateInput>
    /**
     * In case the ShopCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopCategoryUpdateInput, ShopCategoryUncheckedUpdateInput>
  }

  /**
   * ShopCategory delete
   */
  export type ShopCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCategory
     */
    select?: ShopCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopCategory
     */
    omit?: ShopCategoryOmit<ExtArgs> | null
    /**
     * Filter which ShopCategory to delete.
     */
    where: ShopCategoryWhereUniqueInput
  }

  /**
   * ShopCategory deleteMany
   */
  export type ShopCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopCategories to delete
     */
    where?: ShopCategoryWhereInput
    /**
     * Limit how many ShopCategories to delete.
     */
    limit?: number
  }

  /**
   * ShopCategory findRaw
   */
  export type ShopCategoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ShopCategory aggregateRaw
   */
  export type ShopCategoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ShopCategory without action
   */
  export type ShopCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCategory
     */
    select?: ShopCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopCategory
     */
    omit?: ShopCategoryOmit<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    categoryId: number | null
    price: number | null
    originalPrice: number | null
    rating: number | null
    reviews: number | null
  }

  export type ProductSumAggregateOutputType = {
    categoryId: number | null
    price: number | null
    originalPrice: number | null
    rating: number | null
    reviews: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    categoryId: number | null
    price: number | null
    originalPrice: number | null
    rating: number | null
    reviews: number | null
    sale: boolean | null
    new: boolean | null
    bestseller: boolean | null
    createdAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    categoryId: number | null
    price: number | null
    originalPrice: number | null
    rating: number | null
    reviews: number | null
    sale: boolean | null
    new: boolean | null
    bestseller: boolean | null
    createdAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    categoryId: number
    price: number
    originalPrice: number
    rating: number
    reviews: number
    image: number
    sale: number
    new: number
    bestseller: number
    createdAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    categoryId?: true
    price?: true
    originalPrice?: true
    rating?: true
    reviews?: true
  }

  export type ProductSumAggregateInputType = {
    categoryId?: true
    price?: true
    originalPrice?: true
    rating?: true
    reviews?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
    price?: true
    originalPrice?: true
    rating?: true
    reviews?: true
    sale?: true
    new?: true
    bestseller?: true
    createdAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
    price?: true
    originalPrice?: true
    rating?: true
    reviews?: true
    sale?: true
    new?: true
    bestseller?: true
    createdAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
    price?: true
    originalPrice?: true
    rating?: true
    reviews?: true
    image?: true
    sale?: true
    new?: true
    bestseller?: true
    createdAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    categoryId: number
    price: number
    originalPrice: number | null
    rating: number
    reviews: number
    image: string[]
    sale: boolean
    new: boolean
    bestseller: boolean
    createdAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categoryId?: boolean
    price?: boolean
    originalPrice?: boolean
    rating?: boolean
    reviews?: boolean
    image?: boolean
    sale?: boolean
    new?: boolean
    bestseller?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    categoryId?: boolean
    price?: boolean
    originalPrice?: boolean
    rating?: boolean
    reviews?: boolean
    image?: boolean
    sale?: boolean
    new?: boolean
    bestseller?: boolean
    createdAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "categoryId" | "price" | "originalPrice" | "rating" | "reviews" | "image" | "sale" | "new" | "bestseller" | "createdAt", ExtArgs["result"]["product"]>

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      categoryId: number
      price: number
      originalPrice: number | null
      rating: number
      reviews: number
      image: string[]
      sale: boolean
      new: boolean
      bestseller: boolean
      createdAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * @param {ProductFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const product = await prisma.product.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProductFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Product.
     * @param {ProductAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const product = await prisma.product.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProductAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly categoryId: FieldRef<"Product", 'Int'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly originalPrice: FieldRef<"Product", 'Float'>
    readonly rating: FieldRef<"Product", 'Float'>
    readonly reviews: FieldRef<"Product", 'Int'>
    readonly image: FieldRef<"Product", 'String[]'>
    readonly sale: FieldRef<"Product", 'Boolean'>
    readonly new: FieldRef<"Product", 'Boolean'>
    readonly bestseller: FieldRef<"Product", 'Boolean'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product findRaw
   */
  export type ProductFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Product aggregateRaw
   */
  export type ProductAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    email: 'email',
    role: 'role',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ServiceCategoryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description'
  };

  export type ServiceCategoryScalarFieldEnum = (typeof ServiceCategoryScalarFieldEnum)[keyof typeof ServiceCategoryScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    details: 'details',
    pricing: 'pricing',
    duration: 'duration',
    image: 'image'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const DiscussionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    category: 'category',
    author: 'author',
    avatar: 'avatar',
    replies: 'replies',
    views: 'views',
    timeAgo: 'timeAgo',
    hot: 'hot',
    createdAt: 'createdAt'
  };

  export type DiscussionScalarFieldEnum = (typeof DiscussionScalarFieldEnum)[keyof typeof DiscussionScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    type: 'type',
    date: 'date',
    time: 'time',
    location: 'location',
    description: 'description',
    attendees: 'attendees',
    image: 'image',
    createdAt: 'createdAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const ResourceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    icon: 'icon',
    description: 'description',
    count: 'count',
    type: 'type',
    author: 'author',
    featured: 'featured',
    image: 'image',
    createdAt: 'createdAt'
  };

  export type ResourceScalarFieldEnum = (typeof ResourceScalarFieldEnum)[keyof typeof ResourceScalarFieldEnum]


  export const ExpertScalarFieldEnum: {
    id: 'id',
    name: 'name',
    specialty: 'specialty',
    image: 'image',
    bio: 'bio',
    expertise: 'expertise',
    createdAt: 'createdAt'
  };

  export type ExpertScalarFieldEnum = (typeof ExpertScalarFieldEnum)[keyof typeof ExpertScalarFieldEnum]


  export const LostFoundPetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    breed: 'breed',
    gender: 'gender',
    age: 'age',
    location: 'location',
    date: 'date',
    description: 'description',
    contact: 'contact',
    image: 'image',
    reward: 'reward',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type LostFoundPetScalarFieldEnum = (typeof LostFoundPetScalarFieldEnum)[keyof typeof LostFoundPetScalarFieldEnum]


  export const SuccessStoryScalarFieldEnum: {
    id: 'id',
    pet: 'pet',
    type: 'type',
    days: 'days',
    story: 'story',
    image: 'image',
    createdAt: 'createdAt'
  };

  export type SuccessStoryScalarFieldEnum = (typeof SuccessStoryScalarFieldEnum)[keyof typeof SuccessStoryScalarFieldEnum]


  export const ResourceCategoryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    icon: 'icon',
    description: 'description',
    count: 'count',
    color: 'color',
    textColor: 'textColor',
    borderColor: 'borderColor'
  };

  export type ResourceCategoryScalarFieldEnum = (typeof ResourceCategoryScalarFieldEnum)[keyof typeof ResourceCategoryScalarFieldEnum]


  export const InteractiveToolScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    icon: 'icon',
    color: 'color',
    textColor: 'textColor',
    borderColor: 'borderColor',
    createdAt: 'createdAt'
  };

  export type InteractiveToolScalarFieldEnum = (typeof InteractiveToolScalarFieldEnum)[keyof typeof InteractiveToolScalarFieldEnum]


  export const DownloadableResourceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    type: 'type',
    category: 'category',
    description: 'description',
    downloads: 'downloads',
    image: 'image',
    createdAt: 'createdAt'
  };

  export type DownloadableResourceScalarFieldEnum = (typeof DownloadableResourceScalarFieldEnum)[keyof typeof DownloadableResourceScalarFieldEnum]


  export const ShopCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    count: 'count',
    createdAt: 'createdAt'
  };

  export type ShopCategoryScalarFieldEnum = (typeof ShopCategoryScalarFieldEnum)[keyof typeof ShopCategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    categoryId: 'categoryId',
    price: 'price',
    originalPrice: 'originalPrice',
    rating: 'rating',
    reviews: 'reviews',
    image: 'image',
    sale: 'sale',
    new: 'new',
    bestseller: 'bestseller',
    createdAt: 'createdAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PetStatus'
   */
  export type EnumPetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PetStatus'>
    


  /**
   * Reference to a field of type 'PetStatus[]'
   */
  export type ListEnumPetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PetStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ServiceCategoryWhereInput = {
    AND?: ServiceCategoryWhereInput | ServiceCategoryWhereInput[]
    OR?: ServiceCategoryWhereInput[]
    NOT?: ServiceCategoryWhereInput | ServiceCategoryWhereInput[]
    id?: StringFilter<"ServiceCategory"> | string
    title?: StringFilter<"ServiceCategory"> | string
    description?: StringFilter<"ServiceCategory"> | string
  }

  export type ServiceCategoryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type ServiceCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceCategoryWhereInput | ServiceCategoryWhereInput[]
    OR?: ServiceCategoryWhereInput[]
    NOT?: ServiceCategoryWhereInput | ServiceCategoryWhereInput[]
    title?: StringFilter<"ServiceCategory"> | string
    description?: StringFilter<"ServiceCategory"> | string
  }, "id">

  export type ServiceCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    _count?: ServiceCategoryCountOrderByAggregateInput
    _max?: ServiceCategoryMaxOrderByAggregateInput
    _min?: ServiceCategoryMinOrderByAggregateInput
  }

  export type ServiceCategoryScalarWhereWithAggregatesInput = {
    AND?: ServiceCategoryScalarWhereWithAggregatesInput | ServiceCategoryScalarWhereWithAggregatesInput[]
    OR?: ServiceCategoryScalarWhereWithAggregatesInput[]
    NOT?: ServiceCategoryScalarWhereWithAggregatesInput | ServiceCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceCategory"> | string
    title?: StringWithAggregatesFilter<"ServiceCategory"> | string
    description?: StringWithAggregatesFilter<"ServiceCategory"> | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    title?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    details?: StringNullableListFilter<"Service">
    pricing?: StringFilter<"Service"> | string
    duration?: StringFilter<"Service"> | string
    image?: StringNullableListFilter<"Service">
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    details?: SortOrder
    pricing?: SortOrder
    duration?: SortOrder
    image?: SortOrder
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    title?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    details?: StringNullableListFilter<"Service">
    pricing?: StringFilter<"Service"> | string
    duration?: StringFilter<"Service"> | string
    image?: StringNullableListFilter<"Service">
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    details?: SortOrder
    pricing?: SortOrder
    duration?: SortOrder
    image?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    title?: StringWithAggregatesFilter<"Service"> | string
    description?: StringWithAggregatesFilter<"Service"> | string
    details?: StringNullableListFilter<"Service">
    pricing?: StringWithAggregatesFilter<"Service"> | string
    duration?: StringWithAggregatesFilter<"Service"> | string
    image?: StringNullableListFilter<"Service">
  }

  export type DiscussionWhereInput = {
    AND?: DiscussionWhereInput | DiscussionWhereInput[]
    OR?: DiscussionWhereInput[]
    NOT?: DiscussionWhereInput | DiscussionWhereInput[]
    id?: StringFilter<"Discussion"> | string
    title?: StringFilter<"Discussion"> | string
    category?: StringFilter<"Discussion"> | string
    author?: StringFilter<"Discussion"> | string
    avatar?: StringNullableFilter<"Discussion"> | string | null
    replies?: IntFilter<"Discussion"> | number
    views?: IntFilter<"Discussion"> | number
    timeAgo?: StringFilter<"Discussion"> | string
    hot?: BoolFilter<"Discussion"> | boolean
    createdAt?: DateTimeFilter<"Discussion"> | Date | string
  }

  export type DiscussionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    author?: SortOrder
    avatar?: SortOrder
    replies?: SortOrder
    views?: SortOrder
    timeAgo?: SortOrder
    hot?: SortOrder
    createdAt?: SortOrder
  }

  export type DiscussionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DiscussionWhereInput | DiscussionWhereInput[]
    OR?: DiscussionWhereInput[]
    NOT?: DiscussionWhereInput | DiscussionWhereInput[]
    title?: StringFilter<"Discussion"> | string
    category?: StringFilter<"Discussion"> | string
    author?: StringFilter<"Discussion"> | string
    avatar?: StringNullableFilter<"Discussion"> | string | null
    replies?: IntFilter<"Discussion"> | number
    views?: IntFilter<"Discussion"> | number
    timeAgo?: StringFilter<"Discussion"> | string
    hot?: BoolFilter<"Discussion"> | boolean
    createdAt?: DateTimeFilter<"Discussion"> | Date | string
  }, "id">

  export type DiscussionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    author?: SortOrder
    avatar?: SortOrder
    replies?: SortOrder
    views?: SortOrder
    timeAgo?: SortOrder
    hot?: SortOrder
    createdAt?: SortOrder
    _count?: DiscussionCountOrderByAggregateInput
    _avg?: DiscussionAvgOrderByAggregateInput
    _max?: DiscussionMaxOrderByAggregateInput
    _min?: DiscussionMinOrderByAggregateInput
    _sum?: DiscussionSumOrderByAggregateInput
  }

  export type DiscussionScalarWhereWithAggregatesInput = {
    AND?: DiscussionScalarWhereWithAggregatesInput | DiscussionScalarWhereWithAggregatesInput[]
    OR?: DiscussionScalarWhereWithAggregatesInput[]
    NOT?: DiscussionScalarWhereWithAggregatesInput | DiscussionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Discussion"> | string
    title?: StringWithAggregatesFilter<"Discussion"> | string
    category?: StringWithAggregatesFilter<"Discussion"> | string
    author?: StringWithAggregatesFilter<"Discussion"> | string
    avatar?: StringNullableWithAggregatesFilter<"Discussion"> | string | null
    replies?: IntWithAggregatesFilter<"Discussion"> | number
    views?: IntWithAggregatesFilter<"Discussion"> | number
    timeAgo?: StringWithAggregatesFilter<"Discussion"> | string
    hot?: BoolWithAggregatesFilter<"Discussion"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Discussion"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    type?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    time?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    attendees?: IntFilter<"Event"> | number
    image?: StringNullableListFilter<"Event">
    createdAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    description?: SortOrder
    attendees?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    type?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    time?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    attendees?: IntFilter<"Event"> | number
    image?: StringNullableListFilter<"Event">
    createdAt?: DateTimeFilter<"Event"> | Date | string
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    description?: SortOrder
    attendees?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    type?: StringWithAggregatesFilter<"Event"> | string
    date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    time?: StringWithAggregatesFilter<"Event"> | string
    location?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    attendees?: IntWithAggregatesFilter<"Event"> | number
    image?: StringNullableListFilter<"Event">
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type ResourceWhereInput = {
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    id?: StringFilter<"Resource"> | string
    title?: StringFilter<"Resource"> | string
    icon?: StringNullableFilter<"Resource"> | string | null
    description?: StringFilter<"Resource"> | string
    count?: IntFilter<"Resource"> | number
    type?: StringFilter<"Resource"> | string
    author?: StringNullableFilter<"Resource"> | string | null
    featured?: BoolFilter<"Resource"> | boolean
    image?: StringNullableListFilter<"Resource">
    createdAt?: DateTimeFilter<"Resource"> | Date | string
  }

  export type ResourceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    count?: SortOrder
    type?: SortOrder
    author?: SortOrder
    featured?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type ResourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    title?: StringFilter<"Resource"> | string
    icon?: StringNullableFilter<"Resource"> | string | null
    description?: StringFilter<"Resource"> | string
    count?: IntFilter<"Resource"> | number
    type?: StringFilter<"Resource"> | string
    author?: StringNullableFilter<"Resource"> | string | null
    featured?: BoolFilter<"Resource"> | boolean
    image?: StringNullableListFilter<"Resource">
    createdAt?: DateTimeFilter<"Resource"> | Date | string
  }, "id">

  export type ResourceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    count?: SortOrder
    type?: SortOrder
    author?: SortOrder
    featured?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    _count?: ResourceCountOrderByAggregateInput
    _avg?: ResourceAvgOrderByAggregateInput
    _max?: ResourceMaxOrderByAggregateInput
    _min?: ResourceMinOrderByAggregateInput
    _sum?: ResourceSumOrderByAggregateInput
  }

  export type ResourceScalarWhereWithAggregatesInput = {
    AND?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    OR?: ResourceScalarWhereWithAggregatesInput[]
    NOT?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resource"> | string
    title?: StringWithAggregatesFilter<"Resource"> | string
    icon?: StringNullableWithAggregatesFilter<"Resource"> | string | null
    description?: StringWithAggregatesFilter<"Resource"> | string
    count?: IntWithAggregatesFilter<"Resource"> | number
    type?: StringWithAggregatesFilter<"Resource"> | string
    author?: StringNullableWithAggregatesFilter<"Resource"> | string | null
    featured?: BoolWithAggregatesFilter<"Resource"> | boolean
    image?: StringNullableListFilter<"Resource">
    createdAt?: DateTimeWithAggregatesFilter<"Resource"> | Date | string
  }

  export type ExpertWhereInput = {
    AND?: ExpertWhereInput | ExpertWhereInput[]
    OR?: ExpertWhereInput[]
    NOT?: ExpertWhereInput | ExpertWhereInput[]
    id?: StringFilter<"Expert"> | string
    name?: StringFilter<"Expert"> | string
    specialty?: StringFilter<"Expert"> | string
    image?: StringNullableFilter<"Expert"> | string | null
    bio?: StringFilter<"Expert"> | string
    expertise?: StringNullableListFilter<"Expert">
    createdAt?: DateTimeFilter<"Expert"> | Date | string
  }

  export type ExpertOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    specialty?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    expertise?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpertWhereInput | ExpertWhereInput[]
    OR?: ExpertWhereInput[]
    NOT?: ExpertWhereInput | ExpertWhereInput[]
    name?: StringFilter<"Expert"> | string
    specialty?: StringFilter<"Expert"> | string
    image?: StringNullableFilter<"Expert"> | string | null
    bio?: StringFilter<"Expert"> | string
    expertise?: StringNullableListFilter<"Expert">
    createdAt?: DateTimeFilter<"Expert"> | Date | string
  }, "id">

  export type ExpertOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    specialty?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    expertise?: SortOrder
    createdAt?: SortOrder
    _count?: ExpertCountOrderByAggregateInput
    _max?: ExpertMaxOrderByAggregateInput
    _min?: ExpertMinOrderByAggregateInput
  }

  export type ExpertScalarWhereWithAggregatesInput = {
    AND?: ExpertScalarWhereWithAggregatesInput | ExpertScalarWhereWithAggregatesInput[]
    OR?: ExpertScalarWhereWithAggregatesInput[]
    NOT?: ExpertScalarWhereWithAggregatesInput | ExpertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Expert"> | string
    name?: StringWithAggregatesFilter<"Expert"> | string
    specialty?: StringWithAggregatesFilter<"Expert"> | string
    image?: StringNullableWithAggregatesFilter<"Expert"> | string | null
    bio?: StringWithAggregatesFilter<"Expert"> | string
    expertise?: StringNullableListFilter<"Expert">
    createdAt?: DateTimeWithAggregatesFilter<"Expert"> | Date | string
  }

  export type LostFoundPetWhereInput = {
    AND?: LostFoundPetWhereInput | LostFoundPetWhereInput[]
    OR?: LostFoundPetWhereInput[]
    NOT?: LostFoundPetWhereInput | LostFoundPetWhereInput[]
    id?: StringFilter<"LostFoundPet"> | string
    name?: StringNullableFilter<"LostFoundPet"> | string | null
    type?: StringFilter<"LostFoundPet"> | string
    breed?: StringFilter<"LostFoundPet"> | string
    gender?: StringFilter<"LostFoundPet"> | string
    age?: StringFilter<"LostFoundPet"> | string
    location?: StringFilter<"LostFoundPet"> | string
    date?: DateTimeFilter<"LostFoundPet"> | Date | string
    description?: StringFilter<"LostFoundPet"> | string
    contact?: StringFilter<"LostFoundPet"> | string
    image?: StringNullableListFilter<"LostFoundPet">
    reward?: BoolFilter<"LostFoundPet"> | boolean
    status?: EnumPetStatusFilter<"LostFoundPet"> | $Enums.PetStatus
    createdAt?: DateTimeFilter<"LostFoundPet"> | Date | string
  }

  export type LostFoundPetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    breed?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    location?: SortOrder
    date?: SortOrder
    description?: SortOrder
    contact?: SortOrder
    image?: SortOrder
    reward?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LostFoundPetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LostFoundPetWhereInput | LostFoundPetWhereInput[]
    OR?: LostFoundPetWhereInput[]
    NOT?: LostFoundPetWhereInput | LostFoundPetWhereInput[]
    name?: StringNullableFilter<"LostFoundPet"> | string | null
    type?: StringFilter<"LostFoundPet"> | string
    breed?: StringFilter<"LostFoundPet"> | string
    gender?: StringFilter<"LostFoundPet"> | string
    age?: StringFilter<"LostFoundPet"> | string
    location?: StringFilter<"LostFoundPet"> | string
    date?: DateTimeFilter<"LostFoundPet"> | Date | string
    description?: StringFilter<"LostFoundPet"> | string
    contact?: StringFilter<"LostFoundPet"> | string
    image?: StringNullableListFilter<"LostFoundPet">
    reward?: BoolFilter<"LostFoundPet"> | boolean
    status?: EnumPetStatusFilter<"LostFoundPet"> | $Enums.PetStatus
    createdAt?: DateTimeFilter<"LostFoundPet"> | Date | string
  }, "id">

  export type LostFoundPetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    breed?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    location?: SortOrder
    date?: SortOrder
    description?: SortOrder
    contact?: SortOrder
    image?: SortOrder
    reward?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: LostFoundPetCountOrderByAggregateInput
    _max?: LostFoundPetMaxOrderByAggregateInput
    _min?: LostFoundPetMinOrderByAggregateInput
  }

  export type LostFoundPetScalarWhereWithAggregatesInput = {
    AND?: LostFoundPetScalarWhereWithAggregatesInput | LostFoundPetScalarWhereWithAggregatesInput[]
    OR?: LostFoundPetScalarWhereWithAggregatesInput[]
    NOT?: LostFoundPetScalarWhereWithAggregatesInput | LostFoundPetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LostFoundPet"> | string
    name?: StringNullableWithAggregatesFilter<"LostFoundPet"> | string | null
    type?: StringWithAggregatesFilter<"LostFoundPet"> | string
    breed?: StringWithAggregatesFilter<"LostFoundPet"> | string
    gender?: StringWithAggregatesFilter<"LostFoundPet"> | string
    age?: StringWithAggregatesFilter<"LostFoundPet"> | string
    location?: StringWithAggregatesFilter<"LostFoundPet"> | string
    date?: DateTimeWithAggregatesFilter<"LostFoundPet"> | Date | string
    description?: StringWithAggregatesFilter<"LostFoundPet"> | string
    contact?: StringWithAggregatesFilter<"LostFoundPet"> | string
    image?: StringNullableListFilter<"LostFoundPet">
    reward?: BoolWithAggregatesFilter<"LostFoundPet"> | boolean
    status?: EnumPetStatusWithAggregatesFilter<"LostFoundPet"> | $Enums.PetStatus
    createdAt?: DateTimeWithAggregatesFilter<"LostFoundPet"> | Date | string
  }

  export type SuccessStoryWhereInput = {
    AND?: SuccessStoryWhereInput | SuccessStoryWhereInput[]
    OR?: SuccessStoryWhereInput[]
    NOT?: SuccessStoryWhereInput | SuccessStoryWhereInput[]
    id?: StringFilter<"SuccessStory"> | string
    pet?: StringFilter<"SuccessStory"> | string
    type?: StringFilter<"SuccessStory"> | string
    days?: IntFilter<"SuccessStory"> | number
    story?: StringFilter<"SuccessStory"> | string
    image?: StringNullableListFilter<"SuccessStory">
    createdAt?: DateTimeFilter<"SuccessStory"> | Date | string
  }

  export type SuccessStoryOrderByWithRelationInput = {
    id?: SortOrder
    pet?: SortOrder
    type?: SortOrder
    days?: SortOrder
    story?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type SuccessStoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SuccessStoryWhereInput | SuccessStoryWhereInput[]
    OR?: SuccessStoryWhereInput[]
    NOT?: SuccessStoryWhereInput | SuccessStoryWhereInput[]
    pet?: StringFilter<"SuccessStory"> | string
    type?: StringFilter<"SuccessStory"> | string
    days?: IntFilter<"SuccessStory"> | number
    story?: StringFilter<"SuccessStory"> | string
    image?: StringNullableListFilter<"SuccessStory">
    createdAt?: DateTimeFilter<"SuccessStory"> | Date | string
  }, "id">

  export type SuccessStoryOrderByWithAggregationInput = {
    id?: SortOrder
    pet?: SortOrder
    type?: SortOrder
    days?: SortOrder
    story?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    _count?: SuccessStoryCountOrderByAggregateInput
    _avg?: SuccessStoryAvgOrderByAggregateInput
    _max?: SuccessStoryMaxOrderByAggregateInput
    _min?: SuccessStoryMinOrderByAggregateInput
    _sum?: SuccessStorySumOrderByAggregateInput
  }

  export type SuccessStoryScalarWhereWithAggregatesInput = {
    AND?: SuccessStoryScalarWhereWithAggregatesInput | SuccessStoryScalarWhereWithAggregatesInput[]
    OR?: SuccessStoryScalarWhereWithAggregatesInput[]
    NOT?: SuccessStoryScalarWhereWithAggregatesInput | SuccessStoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SuccessStory"> | string
    pet?: StringWithAggregatesFilter<"SuccessStory"> | string
    type?: StringWithAggregatesFilter<"SuccessStory"> | string
    days?: IntWithAggregatesFilter<"SuccessStory"> | number
    story?: StringWithAggregatesFilter<"SuccessStory"> | string
    image?: StringNullableListFilter<"SuccessStory">
    createdAt?: DateTimeWithAggregatesFilter<"SuccessStory"> | Date | string
  }

  export type ResourceCategoryWhereInput = {
    AND?: ResourceCategoryWhereInput | ResourceCategoryWhereInput[]
    OR?: ResourceCategoryWhereInput[]
    NOT?: ResourceCategoryWhereInput | ResourceCategoryWhereInput[]
    id?: StringFilter<"ResourceCategory"> | string
    title?: StringFilter<"ResourceCategory"> | string
    icon?: StringNullableFilter<"ResourceCategory"> | string | null
    description?: StringFilter<"ResourceCategory"> | string
    count?: IntFilter<"ResourceCategory"> | number
    color?: StringNullableFilter<"ResourceCategory"> | string | null
    textColor?: StringNullableFilter<"ResourceCategory"> | string | null
    borderColor?: StringNullableFilter<"ResourceCategory"> | string | null
  }

  export type ResourceCategoryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    count?: SortOrder
    color?: SortOrder
    textColor?: SortOrder
    borderColor?: SortOrder
  }

  export type ResourceCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResourceCategoryWhereInput | ResourceCategoryWhereInput[]
    OR?: ResourceCategoryWhereInput[]
    NOT?: ResourceCategoryWhereInput | ResourceCategoryWhereInput[]
    title?: StringFilter<"ResourceCategory"> | string
    icon?: StringNullableFilter<"ResourceCategory"> | string | null
    description?: StringFilter<"ResourceCategory"> | string
    count?: IntFilter<"ResourceCategory"> | number
    color?: StringNullableFilter<"ResourceCategory"> | string | null
    textColor?: StringNullableFilter<"ResourceCategory"> | string | null
    borderColor?: StringNullableFilter<"ResourceCategory"> | string | null
  }, "id">

  export type ResourceCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    count?: SortOrder
    color?: SortOrder
    textColor?: SortOrder
    borderColor?: SortOrder
    _count?: ResourceCategoryCountOrderByAggregateInput
    _avg?: ResourceCategoryAvgOrderByAggregateInput
    _max?: ResourceCategoryMaxOrderByAggregateInput
    _min?: ResourceCategoryMinOrderByAggregateInput
    _sum?: ResourceCategorySumOrderByAggregateInput
  }

  export type ResourceCategoryScalarWhereWithAggregatesInput = {
    AND?: ResourceCategoryScalarWhereWithAggregatesInput | ResourceCategoryScalarWhereWithAggregatesInput[]
    OR?: ResourceCategoryScalarWhereWithAggregatesInput[]
    NOT?: ResourceCategoryScalarWhereWithAggregatesInput | ResourceCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResourceCategory"> | string
    title?: StringWithAggregatesFilter<"ResourceCategory"> | string
    icon?: StringNullableWithAggregatesFilter<"ResourceCategory"> | string | null
    description?: StringWithAggregatesFilter<"ResourceCategory"> | string
    count?: IntWithAggregatesFilter<"ResourceCategory"> | number
    color?: StringNullableWithAggregatesFilter<"ResourceCategory"> | string | null
    textColor?: StringNullableWithAggregatesFilter<"ResourceCategory"> | string | null
    borderColor?: StringNullableWithAggregatesFilter<"ResourceCategory"> | string | null
  }

  export type InteractiveToolWhereInput = {
    AND?: InteractiveToolWhereInput | InteractiveToolWhereInput[]
    OR?: InteractiveToolWhereInput[]
    NOT?: InteractiveToolWhereInput | InteractiveToolWhereInput[]
    id?: StringFilter<"InteractiveTool"> | string
    title?: StringFilter<"InteractiveTool"> | string
    description?: StringFilter<"InteractiveTool"> | string
    icon?: StringNullableFilter<"InteractiveTool"> | string | null
    color?: StringNullableFilter<"InteractiveTool"> | string | null
    textColor?: StringNullableFilter<"InteractiveTool"> | string | null
    borderColor?: StringNullableFilter<"InteractiveTool"> | string | null
    createdAt?: DateTimeFilter<"InteractiveTool"> | Date | string
  }

  export type InteractiveToolOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    textColor?: SortOrder
    borderColor?: SortOrder
    createdAt?: SortOrder
  }

  export type InteractiveToolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InteractiveToolWhereInput | InteractiveToolWhereInput[]
    OR?: InteractiveToolWhereInput[]
    NOT?: InteractiveToolWhereInput | InteractiveToolWhereInput[]
    title?: StringFilter<"InteractiveTool"> | string
    description?: StringFilter<"InteractiveTool"> | string
    icon?: StringNullableFilter<"InteractiveTool"> | string | null
    color?: StringNullableFilter<"InteractiveTool"> | string | null
    textColor?: StringNullableFilter<"InteractiveTool"> | string | null
    borderColor?: StringNullableFilter<"InteractiveTool"> | string | null
    createdAt?: DateTimeFilter<"InteractiveTool"> | Date | string
  }, "id">

  export type InteractiveToolOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    textColor?: SortOrder
    borderColor?: SortOrder
    createdAt?: SortOrder
    _count?: InteractiveToolCountOrderByAggregateInput
    _max?: InteractiveToolMaxOrderByAggregateInput
    _min?: InteractiveToolMinOrderByAggregateInput
  }

  export type InteractiveToolScalarWhereWithAggregatesInput = {
    AND?: InteractiveToolScalarWhereWithAggregatesInput | InteractiveToolScalarWhereWithAggregatesInput[]
    OR?: InteractiveToolScalarWhereWithAggregatesInput[]
    NOT?: InteractiveToolScalarWhereWithAggregatesInput | InteractiveToolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InteractiveTool"> | string
    title?: StringWithAggregatesFilter<"InteractiveTool"> | string
    description?: StringWithAggregatesFilter<"InteractiveTool"> | string
    icon?: StringNullableWithAggregatesFilter<"InteractiveTool"> | string | null
    color?: StringNullableWithAggregatesFilter<"InteractiveTool"> | string | null
    textColor?: StringNullableWithAggregatesFilter<"InteractiveTool"> | string | null
    borderColor?: StringNullableWithAggregatesFilter<"InteractiveTool"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InteractiveTool"> | Date | string
  }

  export type DownloadableResourceWhereInput = {
    AND?: DownloadableResourceWhereInput | DownloadableResourceWhereInput[]
    OR?: DownloadableResourceWhereInput[]
    NOT?: DownloadableResourceWhereInput | DownloadableResourceWhereInput[]
    id?: StringFilter<"DownloadableResource"> | string
    title?: StringFilter<"DownloadableResource"> | string
    type?: StringFilter<"DownloadableResource"> | string
    category?: StringFilter<"DownloadableResource"> | string
    description?: StringFilter<"DownloadableResource"> | string
    downloads?: IntFilter<"DownloadableResource"> | number
    image?: StringNullableListFilter<"DownloadableResource">
    createdAt?: DateTimeFilter<"DownloadableResource"> | Date | string
  }

  export type DownloadableResourceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    category?: SortOrder
    description?: SortOrder
    downloads?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type DownloadableResourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DownloadableResourceWhereInput | DownloadableResourceWhereInput[]
    OR?: DownloadableResourceWhereInput[]
    NOT?: DownloadableResourceWhereInput | DownloadableResourceWhereInput[]
    title?: StringFilter<"DownloadableResource"> | string
    type?: StringFilter<"DownloadableResource"> | string
    category?: StringFilter<"DownloadableResource"> | string
    description?: StringFilter<"DownloadableResource"> | string
    downloads?: IntFilter<"DownloadableResource"> | number
    image?: StringNullableListFilter<"DownloadableResource">
    createdAt?: DateTimeFilter<"DownloadableResource"> | Date | string
  }, "id">

  export type DownloadableResourceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    category?: SortOrder
    description?: SortOrder
    downloads?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    _count?: DownloadableResourceCountOrderByAggregateInput
    _avg?: DownloadableResourceAvgOrderByAggregateInput
    _max?: DownloadableResourceMaxOrderByAggregateInput
    _min?: DownloadableResourceMinOrderByAggregateInput
    _sum?: DownloadableResourceSumOrderByAggregateInput
  }

  export type DownloadableResourceScalarWhereWithAggregatesInput = {
    AND?: DownloadableResourceScalarWhereWithAggregatesInput | DownloadableResourceScalarWhereWithAggregatesInput[]
    OR?: DownloadableResourceScalarWhereWithAggregatesInput[]
    NOT?: DownloadableResourceScalarWhereWithAggregatesInput | DownloadableResourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DownloadableResource"> | string
    title?: StringWithAggregatesFilter<"DownloadableResource"> | string
    type?: StringWithAggregatesFilter<"DownloadableResource"> | string
    category?: StringWithAggregatesFilter<"DownloadableResource"> | string
    description?: StringWithAggregatesFilter<"DownloadableResource"> | string
    downloads?: IntWithAggregatesFilter<"DownloadableResource"> | number
    image?: StringNullableListFilter<"DownloadableResource">
    createdAt?: DateTimeWithAggregatesFilter<"DownloadableResource"> | Date | string
  }

  export type ShopCategoryWhereInput = {
    AND?: ShopCategoryWhereInput | ShopCategoryWhereInput[]
    OR?: ShopCategoryWhereInput[]
    NOT?: ShopCategoryWhereInput | ShopCategoryWhereInput[]
    id?: StringFilter<"ShopCategory"> | string
    name?: StringFilter<"ShopCategory"> | string
    count?: IntFilter<"ShopCategory"> | number
    createdAt?: DateTimeFilter<"ShopCategory"> | Date | string
  }

  export type ShopCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
  }

  export type ShopCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShopCategoryWhereInput | ShopCategoryWhereInput[]
    OR?: ShopCategoryWhereInput[]
    NOT?: ShopCategoryWhereInput | ShopCategoryWhereInput[]
    name?: StringFilter<"ShopCategory"> | string
    count?: IntFilter<"ShopCategory"> | number
    createdAt?: DateTimeFilter<"ShopCategory"> | Date | string
  }, "id">

  export type ShopCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    _count?: ShopCategoryCountOrderByAggregateInput
    _avg?: ShopCategoryAvgOrderByAggregateInput
    _max?: ShopCategoryMaxOrderByAggregateInput
    _min?: ShopCategoryMinOrderByAggregateInput
    _sum?: ShopCategorySumOrderByAggregateInput
  }

  export type ShopCategoryScalarWhereWithAggregatesInput = {
    AND?: ShopCategoryScalarWhereWithAggregatesInput | ShopCategoryScalarWhereWithAggregatesInput[]
    OR?: ShopCategoryScalarWhereWithAggregatesInput[]
    NOT?: ShopCategoryScalarWhereWithAggregatesInput | ShopCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShopCategory"> | string
    name?: StringWithAggregatesFilter<"ShopCategory"> | string
    count?: IntWithAggregatesFilter<"ShopCategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ShopCategory"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    categoryId?: IntFilter<"Product"> | number
    price?: FloatFilter<"Product"> | number
    originalPrice?: FloatNullableFilter<"Product"> | number | null
    rating?: FloatFilter<"Product"> | number
    reviews?: IntFilter<"Product"> | number
    image?: StringNullableListFilter<"Product">
    sale?: BoolFilter<"Product"> | boolean
    new?: BoolFilter<"Product"> | boolean
    bestseller?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    image?: SortOrder
    sale?: SortOrder
    new?: SortOrder
    bestseller?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    categoryId?: IntFilter<"Product"> | number
    price?: FloatFilter<"Product"> | number
    originalPrice?: FloatNullableFilter<"Product"> | number | null
    rating?: FloatFilter<"Product"> | number
    reviews?: IntFilter<"Product"> | number
    image?: StringNullableListFilter<"Product">
    sale?: BoolFilter<"Product"> | boolean
    new?: BoolFilter<"Product"> | boolean
    bestseller?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    image?: SortOrder
    sale?: SortOrder
    new?: SortOrder
    bestseller?: SortOrder
    createdAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    categoryId?: IntWithAggregatesFilter<"Product"> | number
    price?: FloatWithAggregatesFilter<"Product"> | number
    originalPrice?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    rating?: FloatWithAggregatesFilter<"Product"> | number
    reviews?: IntWithAggregatesFilter<"Product"> | number
    image?: StringNullableListFilter<"Product">
    sale?: BoolWithAggregatesFilter<"Product"> | boolean
    new?: BoolWithAggregatesFilter<"Product"> | boolean
    bestseller?: BoolWithAggregatesFilter<"Product"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string
    username: string
    email: string
    role?: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string
    username: string
    email: string
    role?: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string
    username: string
    email: string
    role?: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCategoryCreateInput = {
    id?: string
    title: string
    description: string
  }

  export type ServiceCategoryUncheckedCreateInput = {
    id?: string
    title: string
    description: string
  }

  export type ServiceCategoryUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceCategoryUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceCategoryCreateManyInput = {
    id?: string
    title: string
    description: string
  }

  export type ServiceCategoryUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceCategoryUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceCreateInput = {
    id?: string
    title: string
    description: string
    details?: ServiceCreatedetailsInput | string[]
    pricing: string
    duration: string
    image?: ServiceCreateimageInput | string[]
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    details?: ServiceCreatedetailsInput | string[]
    pricing: string
    duration: string
    image?: ServiceCreateimageInput | string[]
  }

  export type ServiceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    details?: ServiceUpdatedetailsInput | string[]
    pricing?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    image?: ServiceUpdateimageInput | string[]
  }

  export type ServiceUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    details?: ServiceUpdatedetailsInput | string[]
    pricing?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    image?: ServiceUpdateimageInput | string[]
  }

  export type ServiceCreateManyInput = {
    id?: string
    title: string
    description: string
    details?: ServiceCreatedetailsInput | string[]
    pricing: string
    duration: string
    image?: ServiceCreateimageInput | string[]
  }

  export type ServiceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    details?: ServiceUpdatedetailsInput | string[]
    pricing?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    image?: ServiceUpdateimageInput | string[]
  }

  export type ServiceUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    details?: ServiceUpdatedetailsInput | string[]
    pricing?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    image?: ServiceUpdateimageInput | string[]
  }

  export type DiscussionCreateInput = {
    id?: string
    title: string
    category: string
    author: string
    avatar?: string | null
    replies: number
    views: number
    timeAgo: string
    hot?: boolean
    createdAt?: Date | string
  }

  export type DiscussionUncheckedCreateInput = {
    id?: string
    title: string
    category: string
    author: string
    avatar?: string | null
    replies: number
    views: number
    timeAgo: string
    hot?: boolean
    createdAt?: Date | string
  }

  export type DiscussionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    timeAgo?: StringFieldUpdateOperationsInput | string
    hot?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscussionUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    timeAgo?: StringFieldUpdateOperationsInput | string
    hot?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscussionCreateManyInput = {
    id?: string
    title: string
    category: string
    author: string
    avatar?: string | null
    replies: number
    views: number
    timeAgo: string
    hot?: boolean
    createdAt?: Date | string
  }

  export type DiscussionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    timeAgo?: StringFieldUpdateOperationsInput | string
    hot?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscussionUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    timeAgo?: StringFieldUpdateOperationsInput | string
    hot?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    title: string
    type: string
    date: Date | string
    time: string
    location: string
    description: string
    attendees: number
    image?: EventCreateimageInput | string[]
    createdAt?: Date | string
  }

  export type EventUncheckedCreateInput = {
    id?: string
    title: string
    type: string
    date: Date | string
    time: string
    location: string
    description: string
    attendees: number
    image?: EventCreateimageInput | string[]
    createdAt?: Date | string
  }

  export type EventUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    attendees?: IntFieldUpdateOperationsInput | number
    image?: EventUpdateimageInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    attendees?: IntFieldUpdateOperationsInput | number
    image?: EventUpdateimageInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyInput = {
    id?: string
    title: string
    type: string
    date: Date | string
    time: string
    location: string
    description: string
    attendees: number
    image?: EventCreateimageInput | string[]
    createdAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    attendees?: IntFieldUpdateOperationsInput | number
    image?: EventUpdateimageInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    attendees?: IntFieldUpdateOperationsInput | number
    image?: EventUpdateimageInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceCreateInput = {
    id?: string
    title: string
    icon?: string | null
    description: string
    count: number
    type: string
    author?: string | null
    featured?: boolean
    image?: ResourceCreateimageInput | string[]
    createdAt?: Date | string
  }

  export type ResourceUncheckedCreateInput = {
    id?: string
    title: string
    icon?: string | null
    description: string
    count: number
    type: string
    author?: string | null
    featured?: boolean
    image?: ResourceCreateimageInput | string[]
    createdAt?: Date | string
  }

  export type ResourceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    image?: ResourceUpdateimageInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    image?: ResourceUpdateimageInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceCreateManyInput = {
    id?: string
    title: string
    icon?: string | null
    description: string
    count: number
    type: string
    author?: string | null
    featured?: boolean
    image?: ResourceCreateimageInput | string[]
    createdAt?: Date | string
  }

  export type ResourceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    image?: ResourceUpdateimageInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    image?: ResourceUpdateimageInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertCreateInput = {
    id?: string
    name: string
    specialty: string
    image?: string | null
    bio: string
    expertise?: ExpertCreateexpertiseInput | string[]
    createdAt?: Date | string
  }

  export type ExpertUncheckedCreateInput = {
    id?: string
    name: string
    specialty: string
    image?: string | null
    bio: string
    expertise?: ExpertCreateexpertiseInput | string[]
    createdAt?: Date | string
  }

  export type ExpertUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    expertise?: ExpertUpdateexpertiseInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    expertise?: ExpertUpdateexpertiseInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertCreateManyInput = {
    id?: string
    name: string
    specialty: string
    image?: string | null
    bio: string
    expertise?: ExpertCreateexpertiseInput | string[]
    createdAt?: Date | string
  }

  export type ExpertUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    expertise?: ExpertUpdateexpertiseInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    expertise?: ExpertUpdateexpertiseInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LostFoundPetCreateInput = {
    id?: string
    name?: string | null
    type: string
    breed: string
    gender: string
    age: string
    location: string
    date?: Date | string
    description: string
    contact: string
    image?: LostFoundPetCreateimageInput | string[]
    reward?: boolean
    status: $Enums.PetStatus
    createdAt?: Date | string
  }

  export type LostFoundPetUncheckedCreateInput = {
    id?: string
    name?: string | null
    type: string
    breed: string
    gender: string
    age: string
    location: string
    date?: Date | string
    description: string
    contact: string
    image?: LostFoundPetCreateimageInput | string[]
    reward?: boolean
    status: $Enums.PetStatus
    createdAt?: Date | string
  }

  export type LostFoundPetUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    image?: LostFoundPetUpdateimageInput | string[]
    reward?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumPetStatusFieldUpdateOperationsInput | $Enums.PetStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LostFoundPetUncheckedUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    image?: LostFoundPetUpdateimageInput | string[]
    reward?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumPetStatusFieldUpdateOperationsInput | $Enums.PetStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LostFoundPetCreateManyInput = {
    id?: string
    name?: string | null
    type: string
    breed: string
    gender: string
    age: string
    location: string
    date?: Date | string
    description: string
    contact: string
    image?: LostFoundPetCreateimageInput | string[]
    reward?: boolean
    status: $Enums.PetStatus
    createdAt?: Date | string
  }

  export type LostFoundPetUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    image?: LostFoundPetUpdateimageInput | string[]
    reward?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumPetStatusFieldUpdateOperationsInput | $Enums.PetStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LostFoundPetUncheckedUpdateManyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    image?: LostFoundPetUpdateimageInput | string[]
    reward?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumPetStatusFieldUpdateOperationsInput | $Enums.PetStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuccessStoryCreateInput = {
    id?: string
    pet: string
    type: string
    days: number
    story: string
    image?: SuccessStoryCreateimageInput | string[]
    createdAt?: Date | string
  }

  export type SuccessStoryUncheckedCreateInput = {
    id?: string
    pet: string
    type: string
    days: number
    story: string
    image?: SuccessStoryCreateimageInput | string[]
    createdAt?: Date | string
  }

  export type SuccessStoryUpdateInput = {
    pet?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    story?: StringFieldUpdateOperationsInput | string
    image?: SuccessStoryUpdateimageInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuccessStoryUncheckedUpdateInput = {
    pet?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    story?: StringFieldUpdateOperationsInput | string
    image?: SuccessStoryUpdateimageInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuccessStoryCreateManyInput = {
    id?: string
    pet: string
    type: string
    days: number
    story: string
    image?: SuccessStoryCreateimageInput | string[]
    createdAt?: Date | string
  }

  export type SuccessStoryUpdateManyMutationInput = {
    pet?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    story?: StringFieldUpdateOperationsInput | string
    image?: SuccessStoryUpdateimageInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuccessStoryUncheckedUpdateManyInput = {
    pet?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    story?: StringFieldUpdateOperationsInput | string
    image?: SuccessStoryUpdateimageInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceCategoryCreateInput = {
    id?: string
    title: string
    icon?: string | null
    description: string
    count: number
    color?: string | null
    textColor?: string | null
    borderColor?: string | null
  }

  export type ResourceCategoryUncheckedCreateInput = {
    id?: string
    title: string
    icon?: string | null
    description: string
    count: number
    color?: string | null
    textColor?: string | null
    borderColor?: string | null
  }

  export type ResourceCategoryUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    borderColor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResourceCategoryUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    borderColor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResourceCategoryCreateManyInput = {
    id?: string
    title: string
    icon?: string | null
    description: string
    count: number
    color?: string | null
    textColor?: string | null
    borderColor?: string | null
  }

  export type ResourceCategoryUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    borderColor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResourceCategoryUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    borderColor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InteractiveToolCreateInput = {
    id?: string
    title: string
    description: string
    icon?: string | null
    color?: string | null
    textColor?: string | null
    borderColor?: string | null
    createdAt?: Date | string
  }

  export type InteractiveToolUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    icon?: string | null
    color?: string | null
    textColor?: string | null
    borderColor?: string | null
    createdAt?: Date | string
  }

  export type InteractiveToolUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    borderColor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractiveToolUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    borderColor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractiveToolCreateManyInput = {
    id?: string
    title: string
    description: string
    icon?: string | null
    color?: string | null
    textColor?: string | null
    borderColor?: string | null
    createdAt?: Date | string
  }

  export type InteractiveToolUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    borderColor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractiveToolUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    borderColor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DownloadableResourceCreateInput = {
    id?: string
    title: string
    type: string
    category: string
    description: string
    downloads: number
    image?: DownloadableResourceCreateimageInput | string[]
    createdAt?: Date | string
  }

  export type DownloadableResourceUncheckedCreateInput = {
    id?: string
    title: string
    type: string
    category: string
    description: string
    downloads: number
    image?: DownloadableResourceCreateimageInput | string[]
    createdAt?: Date | string
  }

  export type DownloadableResourceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    downloads?: IntFieldUpdateOperationsInput | number
    image?: DownloadableResourceUpdateimageInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DownloadableResourceUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    downloads?: IntFieldUpdateOperationsInput | number
    image?: DownloadableResourceUpdateimageInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DownloadableResourceCreateManyInput = {
    id?: string
    title: string
    type: string
    category: string
    description: string
    downloads: number
    image?: DownloadableResourceCreateimageInput | string[]
    createdAt?: Date | string
  }

  export type DownloadableResourceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    downloads?: IntFieldUpdateOperationsInput | number
    image?: DownloadableResourceUpdateimageInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DownloadableResourceUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    downloads?: IntFieldUpdateOperationsInput | number
    image?: DownloadableResourceUpdateimageInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopCategoryCreateInput = {
    id?: string
    name: string
    count: number
    createdAt?: Date | string
  }

  export type ShopCategoryUncheckedCreateInput = {
    id?: string
    name: string
    count: number
    createdAt?: Date | string
  }

  export type ShopCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopCategoryUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopCategoryCreateManyInput = {
    id?: string
    name: string
    count: number
    createdAt?: Date | string
  }

  export type ShopCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopCategoryUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    categoryId: number
    price: number
    originalPrice?: number | null
    rating: number
    reviews: number
    image?: ProductCreateimageInput | string[]
    sale?: boolean
    new?: boolean
    bestseller?: boolean
    createdAt?: Date | string
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    categoryId: number
    price: number
    originalPrice?: number | null
    rating: number
    reviews: number
    image?: ProductCreateimageInput | string[]
    sale?: boolean
    new?: boolean
    bestseller?: boolean
    createdAt?: Date | string
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    image?: ProductUpdateimageInput | string[]
    sale?: BoolFieldUpdateOperationsInput | boolean
    new?: BoolFieldUpdateOperationsInput | boolean
    bestseller?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    image?: ProductUpdateimageInput | string[]
    sale?: BoolFieldUpdateOperationsInput | boolean
    new?: BoolFieldUpdateOperationsInput | boolean
    bestseller?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    categoryId: number
    price: number
    originalPrice?: number | null
    rating: number
    reviews: number
    image?: ProductCreateimageInput | string[]
    sale?: boolean
    new?: boolean
    bestseller?: boolean
    createdAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    image?: ProductUpdateimageInput | string[]
    sale?: BoolFieldUpdateOperationsInput | boolean
    new?: BoolFieldUpdateOperationsInput | boolean
    bestseller?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    image?: ProductUpdateimageInput | string[]
    sale?: BoolFieldUpdateOperationsInput | boolean
    new?: BoolFieldUpdateOperationsInput | boolean
    bestseller?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ServiceCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type ServiceCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type ServiceCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    details?: SortOrder
    pricing?: SortOrder
    duration?: SortOrder
    image?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pricing?: SortOrder
    duration?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pricing?: SortOrder
    duration?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DiscussionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    author?: SortOrder
    avatar?: SortOrder
    replies?: SortOrder
    views?: SortOrder
    timeAgo?: SortOrder
    hot?: SortOrder
    createdAt?: SortOrder
  }

  export type DiscussionAvgOrderByAggregateInput = {
    replies?: SortOrder
    views?: SortOrder
  }

  export type DiscussionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    author?: SortOrder
    avatar?: SortOrder
    replies?: SortOrder
    views?: SortOrder
    timeAgo?: SortOrder
    hot?: SortOrder
    createdAt?: SortOrder
  }

  export type DiscussionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    author?: SortOrder
    avatar?: SortOrder
    replies?: SortOrder
    views?: SortOrder
    timeAgo?: SortOrder
    hot?: SortOrder
    createdAt?: SortOrder
  }

  export type DiscussionSumOrderByAggregateInput = {
    replies?: SortOrder
    views?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    description?: SortOrder
    attendees?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    attendees?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    description?: SortOrder
    attendees?: SortOrder
    createdAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    description?: SortOrder
    attendees?: SortOrder
    createdAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    attendees?: SortOrder
  }

  export type ResourceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    count?: SortOrder
    type?: SortOrder
    author?: SortOrder
    featured?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type ResourceAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type ResourceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    count?: SortOrder
    type?: SortOrder
    author?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
  }

  export type ResourceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    count?: SortOrder
    type?: SortOrder
    author?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
  }

  export type ResourceSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type ExpertCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    specialty?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    expertise?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpertMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    specialty?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpertMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    specialty?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumPetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PetStatus | EnumPetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PetStatus[] | ListEnumPetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetStatus[] | ListEnumPetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPetStatusFilter<$PrismaModel> | $Enums.PetStatus
  }

  export type LostFoundPetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    breed?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    location?: SortOrder
    date?: SortOrder
    description?: SortOrder
    contact?: SortOrder
    image?: SortOrder
    reward?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LostFoundPetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    breed?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    location?: SortOrder
    date?: SortOrder
    description?: SortOrder
    contact?: SortOrder
    reward?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LostFoundPetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    breed?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    location?: SortOrder
    date?: SortOrder
    description?: SortOrder
    contact?: SortOrder
    reward?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumPetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetStatus | EnumPetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PetStatus[] | ListEnumPetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetStatus[] | ListEnumPetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPetStatusWithAggregatesFilter<$PrismaModel> | $Enums.PetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPetStatusFilter<$PrismaModel>
    _max?: NestedEnumPetStatusFilter<$PrismaModel>
  }

  export type SuccessStoryCountOrderByAggregateInput = {
    id?: SortOrder
    pet?: SortOrder
    type?: SortOrder
    days?: SortOrder
    story?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type SuccessStoryAvgOrderByAggregateInput = {
    days?: SortOrder
  }

  export type SuccessStoryMaxOrderByAggregateInput = {
    id?: SortOrder
    pet?: SortOrder
    type?: SortOrder
    days?: SortOrder
    story?: SortOrder
    createdAt?: SortOrder
  }

  export type SuccessStoryMinOrderByAggregateInput = {
    id?: SortOrder
    pet?: SortOrder
    type?: SortOrder
    days?: SortOrder
    story?: SortOrder
    createdAt?: SortOrder
  }

  export type SuccessStorySumOrderByAggregateInput = {
    days?: SortOrder
  }

  export type ResourceCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    count?: SortOrder
    color?: SortOrder
    textColor?: SortOrder
    borderColor?: SortOrder
  }

  export type ResourceCategoryAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type ResourceCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    count?: SortOrder
    color?: SortOrder
    textColor?: SortOrder
    borderColor?: SortOrder
  }

  export type ResourceCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    count?: SortOrder
    color?: SortOrder
    textColor?: SortOrder
    borderColor?: SortOrder
  }

  export type ResourceCategorySumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type InteractiveToolCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    textColor?: SortOrder
    borderColor?: SortOrder
    createdAt?: SortOrder
  }

  export type InteractiveToolMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    textColor?: SortOrder
    borderColor?: SortOrder
    createdAt?: SortOrder
  }

  export type InteractiveToolMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    textColor?: SortOrder
    borderColor?: SortOrder
    createdAt?: SortOrder
  }

  export type DownloadableResourceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    category?: SortOrder
    description?: SortOrder
    downloads?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type DownloadableResourceAvgOrderByAggregateInput = {
    downloads?: SortOrder
  }

  export type DownloadableResourceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    category?: SortOrder
    description?: SortOrder
    downloads?: SortOrder
    createdAt?: SortOrder
  }

  export type DownloadableResourceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    category?: SortOrder
    description?: SortOrder
    downloads?: SortOrder
    createdAt?: SortOrder
  }

  export type DownloadableResourceSumOrderByAggregateInput = {
    downloads?: SortOrder
  }

  export type ShopCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
  }

  export type ShopCategoryAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type ShopCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
  }

  export type ShopCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
  }

  export type ShopCategorySumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    image?: SortOrder
    sale?: SortOrder
    new?: SortOrder
    bestseller?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    categoryId?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    sale?: SortOrder
    new?: SortOrder
    bestseller?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    sale?: SortOrder
    new?: SortOrder
    bestseller?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    categoryId?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ServiceCreatedetailsInput = {
    set: string[]
  }

  export type ServiceCreateimageInput = {
    set: string[]
  }

  export type ServiceUpdatedetailsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ServiceUpdateimageInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EventCreateimageInput = {
    set: string[]
  }

  export type EventUpdateimageInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ResourceCreateimageInput = {
    set: string[]
  }

  export type ResourceUpdateimageInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ExpertCreateexpertiseInput = {
    set: string[]
  }

  export type ExpertUpdateexpertiseInput = {
    set?: string[]
    push?: string | string[]
  }

  export type LostFoundPetCreateimageInput = {
    set: string[]
  }

  export type LostFoundPetUpdateimageInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumPetStatusFieldUpdateOperationsInput = {
    set?: $Enums.PetStatus
  }

  export type SuccessStoryCreateimageInput = {
    set: string[]
  }

  export type SuccessStoryUpdateimageInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DownloadableResourceCreateimageInput = {
    set: string[]
  }

  export type DownloadableResourceUpdateimageInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProductCreateimageInput = {
    set: string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type ProductUpdateimageInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PetStatus | EnumPetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PetStatus[] | ListEnumPetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetStatus[] | ListEnumPetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPetStatusFilter<$PrismaModel> | $Enums.PetStatus
  }

  export type NestedEnumPetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetStatus | EnumPetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PetStatus[] | ListEnumPetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetStatus[] | ListEnumPetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPetStatusWithAggregatesFilter<$PrismaModel> | $Enums.PetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPetStatusFilter<$PrismaModel>
    _max?: NestedEnumPetStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}