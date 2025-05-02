export class ApiResponse<T> {
    success: boolean;
    message: string;
    data?: T | null;
    error?: string;
  
    constructor(success: boolean, message: string, data?: T, error?: string) {
      this.success = success;
      this.message = message;
      this.data = data;
      this.error = error;
    }
  }
  