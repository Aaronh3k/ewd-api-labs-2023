import Account from '../entities/Account';

export default {
  registerAccount: async  (firstName, lastName, email, password, {accountsRepository, authenticator}) => {
    password = await authenticator.encrypt(password)
    const account = new Account(undefined, firstName, lastName, email, password);
    return accountsRepository.persist(account);
  },
  getAccount: (accountId, {accountsRepository}) => {
    return accountsRepository.get(accountId);
  },
  find: ({accountsRepository})=>{
    return accountsRepository.find();
  },
  findByEmail: (email, {accountsRepository})=>{
    return accountsRepository.getByEmail(email);
  },
  authenticate: async (email, password, { accountsRepository, authenticator, tokenManager }) => {
    const account = await accountsRepository.getByEmail(email);
    const result = await authenticator.compare(password, account.password);
    if (!result) {
      throw new Error('Bad credentials');
    }
    const token = tokenManager.generate({ id: account.id, email: account.email });
    return { token, account };
  },
  getFavourites: async (accountId, { accountsRepository }) => {
    const account = await accountsRepository.get(accountId);
    return account.favourites;
  },
  addFavourite: async (accountId, movieId, { accountsRepository }) => {
    const account = await accountsRepository.get(accountId);
    account.favourites.push(movieId);
    return await accountsRepository.merge(account);
  },
  removeFavourite: async (accountId, movieId, { accountsRepository }) => {
    const account = await accountsRepository.get(accountId);
    const favIndex = account.favourites.indexOf(movieId);
    if (favIndex !== -1) {
      account.favourites.splice(favIndex, 1);
      return await accountsRepository.merge(account);
    }
    throw new Error('Movie not found in favourites');
  },  
  verifyToken:   async (token,{accountsRepository, tokenManager}) => {
    const decoded = await tokenManager.decode(token);
    const user = await accountsRepository.getByEmail(decoded.email);
    if (!user) {
        throw new Error('Bad token');
    }
    return user.email;
  }
};
