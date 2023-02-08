import * as bcrypt from 'bcrypt';

export const verifyPassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};
