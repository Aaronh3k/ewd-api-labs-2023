import Account from '../entities/Account';
import mongoose from 'mongoose';
import AccountRepository from './Repository';

export default class extends AccountRepository {
  constructor() {
    super();
    const accountsSchema = new mongoose.Schema({
      firstName: String,
      lastName: String,
      email: { type: String, unique: true, index: true },
      password: String,
      username: { type: String, default: null },
      websiteUrl: { type: String, default: null },
      favourites: [Number]
    });
    this.model = mongoose.model('Account', accountsSchema);
  }

  async persist(accountEntity) {
    const { firstName, lastName, email, password, username, websiteUrl } = accountEntity;
    const result = new this.model({ firstName, lastName, email, password, username, websiteUrl });

    try {
      await result.save();
    } catch (error) {
      console.error('Error saving account:', error);
      throw error;
    }

    if (!result.id) {
      throw new Error('Account was not saved correctly, result.id is undefined');
    }

    accountEntity.id = result.id;
    return accountEntity;
  }

  async merge(accountEntity) {
    const { id, firstName, lastName, username, websiteUrl, favourites } = accountEntity;
    await this.model.findByIdAndUpdate(id, { firstName, lastName, username, websiteUrl, favourites }, { new: true });
    return accountEntity;
  }

  async remove(userId) {
    return this.model.findByIdAndDelete(userId);
  }

  async get(userId) {
    const result = await this.model.findById(userId);
    const { id, firstName, lastName, email, username, websiteUrl, favourites } = result;
    return new Account(id, firstName, lastName, email, undefined, username, websiteUrl, favourites);
  }

  async getByEmail(userEmail) {
    const result = await this.model.findOne({ email: userEmail });
    return new Account(result.id, result.firstName, result.lastName, result.email, result.password, result.username, result.websiteUrl, result.favourites);
  }

  async find() {
    const accounts = await this.model.find();
    return accounts.map((result) => {
      return new Account(result.id, result.firstName, result.lastName, result.email, undefined, result.username, result.websiteUrl, result.favourites);
    });
  }
}