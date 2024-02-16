export type AuthValidation = {
  email: string;
  password: string;
};

export type AuthResponse = {
  token: string;
};

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type UsersResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
};
