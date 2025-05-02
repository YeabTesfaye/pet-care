import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Convert prisma object into a regular JS object 
export function convertToPlainObject<T>(value:T) : T {
  return JSON.parse(JSON.stringify(value))
}

// Format errors
export function formatError(error : any){
  if(error.name === 'ZodError'){
    // Handle zod error 
    const fieldErrors = Object.keys(error.errors).map(
      (filed) => error.errors[filed].message
    );

    return fieldErrors.join('. ');
  }
  else if (
     error.name === 'PrismaClientKnownRequestError' &&
    error.code === 'P2002'
  ) {
     // Handle Prisma error
     const field = error.meta?.target ? error.meta.target[0] : 'Field';
     return `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`;
  } else{
     // Handle other errors
     return typeof error.message === 'string'
     ? error.message
     : JSON.stringify(error.message);
  }
}