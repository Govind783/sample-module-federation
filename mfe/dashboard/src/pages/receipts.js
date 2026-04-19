// // store
// const useReceiptStore = create((set) => ({
//   receipts: [],

//   setReceipts: (receipts) => set({ receipts }),

//   addReceipt: async (receipt) =>{
//     const x = validate()
//     const y = map(X)
//     const apiRes =  await api(y)
//     set((state) => ({
//       receipts: [...state.receipts, apiRes],
//     }))
//   },

//   // this u mising up setters / methods / fns directly into ur store!! MASSIVE RED-FLAG
// //   which right now elixir does in many cases
// // hence clearly seperate out ur controller into classes > which is the orcestrator
// // can validate, update, api, idb etc, and finally puts data into store!

// // so UI absolely dumb
// // store is pure data
// // and controller is heavy lifter


// }));

// // API / FS / db layer

// import ReceiptApis from "./receiptApis";
// const api = new ReceiptApis();

// export class receiptRepository  {
//   async create(payload) {
//     return api.create(payload);
//     // or
//     return DB.put()
//   }

//   async update(payload) {
//     return api.edit(payload);
//   }

//   async delete(id) {
//     return api.delete(id);
//   }
// };


// export class Appointments {
//     constructor(parameters) {
        
//     }
//     get(id){
//         await DB.get() 
//         // or
//         await api.get()
//     }
// }

// class DB {
//     get(){
//         // wrapper on FS
//     }

//     getAll(){
//         // fs bulk fetcher wrapper
//     }
//     // and now ur db is never known to ur app!! hence if tomorrow u wanna plus SUPA-BASE we just change the DB class!
//     // interfaces example get, getAll stay the same
//     // app code example db.getReceipt() or db.getAppoinmentById() keeps working!
// }



// // export const receiptDomain = {
// //   validateCreate(data) {
// //     if (!data.name) throw new Error("Name required");
// //     return data;
// //   },
// // };

// // receiptController.js
// import { receiptRepository } from "./receiptRepository";
// import { receiptDomain } from "./receiptDomain";
// import useReceiptStore from "./store";

// export const receiptController = {
//   async create(data) {
//     const validData = receiptDomain.validateCreate(data); // debetable if controller shuld validate or trust component data! IMO it should componeny should blanket pass controller can and should validate before passing the data on to api / db layer

//     const response = await receiptRepository.create(validData);

//     if (response.success) {
//       useReceiptStore.getState().addReceipt(response.data);
//     }

//     return response;
//   },
// };

// // UI layer

// <button
//   onClick={async () => {
//     setLoading(true);
//     const data = await receiptController.create(someData);
//     setLoading(false);
//   }}
// ></button>;
