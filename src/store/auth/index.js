import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentAccount: {
    id: '1',
    username: 'gurkanyigitgr',
    name: 'Gürkan',
    avatar:
      'https://media.licdn.com/dms/image/D4D03AQHP5j_lUp3hQQ/profile-displayphoto-shrink_200_200/0/1699971726943?e=1705536000&v=beta&t=PWgKG2kEUitm_JcOp-OcKUSsSpTfUt27wJyxBg351es',
  },
  accounts: [
    {
      id: '1',
      username: 'gurkanyigitgr',
      name: 'Gürkan',
      avatar:
        'https://media.licdn.com/dms/image/D4D03AQHP5j_lUp3hQQ/profile-displayphoto-shrink_200_200/0/1699971726943?e=1705536000&v=beta&t=PWgKG2kEUitm_JcOp-OcKUSsSpTfUt27wJyxBg351es',
    },
    {
      id: '2',
      username: 'leomessi',
      name: 'Messi',
      avatar: 'https://ts2.mm.bing.net/th?q=messi+nin+boyu+ka%C3%A7',
    },
  ],
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // state manipulation
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccounts: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _removeAccounts, _setCurrentAccount } =
  auth.actions;

export default auth.reducer;
