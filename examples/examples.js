import TransferZeroSdk from 'transferzero-sdk';

// Please see our documentation at https://github.com/transferzero/api-documentation
// and the API specification at http://api.transferzero.com/documentation/
// for more information.

const apiClient = new TransferZeroSdk.ApiClient({
  apiKey: '<key>',
  apiSecret: '<secret>',
  basePath: 'https://api-sandbox.transferzero.com/v1'
});

// accountValidationExample(apiClient);
// createSenderExample(apiClient);
// updateSenderExample(apiClient);
// createTransactionExample(apiClient);
// createAndFundTransactionExample(apiClient);
// getTransactionErrorMessageExample(apiClient);
// webhookParseExample(apiClient);
// getAccountsExample(apiClient);
// getSendersByExternalId(apiClient);
// getTransactionsByExternalId(apiClient);

async function accountValidationExample(apiClient) {
  // See https://github.com/transferzero/api-documentation/blob/master/additional-features.md#bank-account-name-enquiry
  // for more information on how this feature can be used

  const request = new TransferZeroSdk.AccountValidationRequest();
  request.bank_account = '9040009999999';
  request.bank_code = '190100';
  request.country = TransferZeroSdk.AccountValidationRequest.CountryEnum.GH;
  request.currency = TransferZeroSdk.AccountValidationRequest.CurrencyEnum.GHS;
  request.method = TransferZeroSdk.AccountValidationRequest.MethodEnum.BANK;
  const api = new TransferZeroSdk.AccountValidationApi(apiClient);
  try {
    const response = await api.postAccountValidations(request);
    console.log(response.object);
  } catch (e) {
    if (e.isValidationError) {
      const accountValidationResponse = e.getResponseObject();
      console.error(
        `Account Holder Name Error: ${accountValidationResponse.meta.error}`
      );
    } else {
      console.error(e.error.stack);
    }
  }
}

async function createSenderExample(apiClient) {
  // For more details on senders please check https://github.com/transferzero/api-documentation/blob/master/transaction-flow.md#sender

  const api = new TransferZeroSdk.SendersApi(apiClient);
  const sender = new TransferZeroSdk.Sender();

  sender.country = 'UG';
  sender.phone_country = 'UG';
  sender.phone_number = '752403639';
  sender.email = 'example@home.org';
  sender.first_name = 'Johnny';
  sender.last_name = 'English';
  sender.ip = '127.0.0.1';
  sender.city = 'Kampala';
  sender.street = 'Unknown 17-3';
  sender.address_description = 'Office Address';
  sender.postal_code = '798983';
  sender.birth_date = '1970-12-31';
  sender.documents = [];
  sender.external_id = 'EXTSEN-5555';

  try {
    const senderRequest = new TransferZeroSdk.SenderRequest();
    senderRequest.sender = sender;

    const senderResponse = await api.postSenders(senderRequest);
    console.log(`Sender created! ID: ${senderResponse.object.id}`);
    console.log(senderResponse.object);
    return senderResponse.object.id;
  } catch (e) {
    if (e.isValidationError) {
      const senderResponse = e.getResponseObject();
      console.error('Validation error:', senderResponse.object.errors);
    } else {
      console.error(e.error.stack);
    }
  }
}

async function updateSenderExample(apiClient) {
  // For more details on senders please check https://github.com/transferzero/api-documentation/blob/master/transaction-flow.md#sender

  const api = new TransferZeroSdk.SendersApi(apiClient);
  const sender = new TransferZeroSdk.Sender();

  sender.city = 'London';
  try {
    const senderRequest = new TransferZeroSdk.SenderRequest();
    senderRequest.sender = sender;

    const senderResponse = await api.patchSender(
      'a35f0aab-c0e8-4ffd-9df0-d3ac7cc80a41',
      senderRequest
    );
    console.log(`Sender created! ID: ${senderResponse.object.id}`);
    console.log(senderResponse.object);
    return senderResponse.object.id;
  } catch (e) {
    if (e.isValidationError) {
      const senderResponse = e.getResponseObject();
      console.error('Validation error:', senderResponse.object.errors);
    } else {
      console.error(e.error.stack);
    }
  }
}

async function createTransactionExample(apiClient) {
  // Please check our documentation at https://github.com/transferzero/api-documentation/blob/master/transaction-flow.md
  // for details on how transactions work.
  const api = new TransferZeroSdk.TransactionsApi(apiClient);
  const transaction = new TransferZeroSdk.Transaction();

  // When adding a sender to transaction, please use either an id or external_id. Providing both will result in a validation error.
  // Please see our documentation at https://github.com/transferzero/api-documentation/blob/master/transaction-flow.md#sender
  const sender = new TransferZeroSdk.Sender();
  sender.id = '58754ae1-d2e4-440c-9a81-d290ece2de0d';

  // You can find the various payout options at https://github.com/transferzero/api-documentation/blob/master/transaction-flow.md#payout-details
  const ngnBankDetails = new TransferZeroSdk.PayoutMethodDetails();
  ngnBankDetails.bank_account = '123456789';
  ngnBankDetails.bank_account_type = '20';
  ngnBankDetails.bank_code = '082';
  ngnBankDetails.first_name = 'First';
  ngnBankDetails.last_name = 'Last';

  const payoutMethod = new TransferZeroSdk.PayoutMethod();
  payoutMethod.type = 'NGN::Bank';
  payoutMethod.details = ngnBankDetails;

  // Please see https://github.com/transferzero/api-documentation/blob/master/transaction-flow.md#requested-amount-and-currency
  // on what the request amount and currencies do
  const recipient = new TransferZeroSdk.Recipient();
  recipient.requested_amount = 10000;
  recipient.requested_currency = 'NGN';
  recipient.payout_method = payoutMethod;

  // Similarly you can check https://github.com/transferzero/api-documentation/blob/master/transaction-flow.md#requested-amount-and-currency
  // on details about the input currency parameter
  transaction.input_currency = 'GHS';
  transaction.sender = sender;
  transaction.recipients = [recipient];

  // Find more details on external IDs at https://github.com/transferzero/api-documentation/blob/master/transaction-flow.md#external-id
  transaction.external_id = 'EXTRAN-5555';

  try {
    const transactionRequest = new TransferZeroSdk.TransactionRequest();
    transactionRequest.transaction = transaction;
    const transactionResponse = await api.postTransactions(transactionRequest);
    console.log(`Transaction created! ID: ${transactionResponse.object.id}`);
    console.log(transactionResponse.object);
    return transactionResponse.object.id;
  } catch (e) {
    if (e.isValidationError) {
      const transactionResponse = e.getResponseObject();
      console.error('Validation error:', transactionResponse.object.errors);
    } else {
      console.error(e.error.stack);
    }
  }
}

async function createAndFundTransactionExample(apiClient) {
  const transactionId = await createTransactionExample(apiClient);
  if (transactionId != null) {
    // Please see https://github.com/transferzero/api-documentation/blob/master/transaction-flow.md#funding-transactions
    // on details about funding transactions
    const debit = new TransferZeroSdk.Debit();
    debit.currency = 'GHS';
    debit.to_id = transactionId;
    debit.to_type = 'Transaction';

    const debitRequest = new TransferZeroSdk.DebitRequestWrapper();
    debitRequest.debit = debit;

    const debitsApi = new TransferZeroSdk.AccountDebitsApi(apiClient);
    try {
      const debitListResponse = await debitsApi.postAccountsDebits(
        debitRequest
      );
      console.log('Transaction Funded Successfully');
      console.log(debitListResponse.object[0]);
    } catch (e) {
      if (e.isValidationError) {
        const debitListResponse = e.getResponseObject();
        console.error('Transaction could not be funded');
        console.error(debitListResponse.object[0].errors);
      } else {
        console.error(e.error.stack);
      }
    }
  }
  return transactionId;
}

async function getTransactionErrorMessageExample(apiClient) {
  // Please see https://github.com/transferzero/api-documentation/blob/master/transaction-flow.md#receiving-error-messages
  // on details about error messages
  const transactionId = 'f94a3af4-0637-4498-9184-7733bf0b8af7';
  const api = new TransferZeroSdk.TransactionsApi(apiClient);
  const transaction = await api.getTransaction(transactionId);
  console.log(
    `Get recipient's state error message: ${
      transaction.object.recipients[0].state_reason
    }`
  );
}

async function webhookParseExample(apiClient) {
  // Please see https://github.com/transferzero/api-documentation#webhooks
  // for more details about how webhooks / callbacks work from our system
  const webhookHeader = {
    "Authorization-Nonce": "authorization-nonce",
    "Authorization-Key": "authorization-key",
    "Authorization-Signature": "authorization-signature"
  };

  const webhookUrl = "http://webhook.url";

  const webhookContent = `{
    "webhook": "02b769ff-ffff-ffff-ffff-820d285d76c7",
    "event": "transaction.created",
    "object": {
      "id": "9170b966-ffff-ffff-ffff-7af5ad7e335f",
      "metadata": {},
      "state": "approved",
      "input_amount": 50.00,
      "input_currency": "EUR",
      "sender": {
        "id": "4be2a144-ffff-ffff-ffff-8ebcbfbbbe0c",
        "type": "person",
        "state": "initial",
        "state_reason": null,
        "country": "GB",
        "street": "Test",
        "postal_code": "EH1 1TT",
        "city": "London",
        "phone_country": "GB",
        "phone_number": "+447123456789",
        "email": "test@example.com",
        "ip": "127.0.0.1",
        "first_name": "Test",
        "last_name": "Name",
        "birth_date": "1990-01-01",
        "metadata": {},
        "providers": {}
      },
      "payin_methods": [],
      "paid_amount": 50.00,
      "due_amount": 0,
      "recipients": [
        {
          "id": "69dee5aa-ffff-ffff-ffff-0a2c06353c6b",
          "transaction_id": "9170b966-ffff-ffff-ffff-7af5ad7e335f",
          "created_at": "2017-07-24T15:08:58Z",
          "input_usd_amount": 60.00,
          "state": "initial",
          "transaction_state": "initial",
          "requested_amount": 50.00,
          "requested_currency": "EUR",
          "input_amount": 50.00,
          "input_currency": "EUR",
          "output_amount": 20001,
          "output_currency": "NGN",
          "payout_method": {
            "id": "c67580ee-ffff-ffff-ffff-ac51f1d0c035",
            "type": "NGN::Bank",
            "details": {
              "email": "",
              "bank_code": "011",
              "last_name": "Test",
              "first_name": "User",
              "bank_account": "1111111111",
              "bank_account_type": "10"
            },
            "metadata": {},
            "provider": "interswitch",
            "fields": {
              "email": {
                "type": "input",
                "validations": {
                  "format": "\\\\A((\\\\w+([\\\\-+.]\\\\w+)*@[a-zA-Z0-9]+([\\\\-\\\\.][a-zA-Z0-9]+)*)*){3,320}\\\\z"
                }
              },
              "first_name": {
                "type": "input",
                "validations": {
                  "presence": true
                }
              },
              "last_name": {
                "type": "input",
                "validations": {
                  "presence": true
                }
              },
              "bank_code": {
                "type": "select",
                "options": {
                  "063": "Diamond Bank",
                  "050": "EcoBank",
                  "214": "FCMB Bank",
                  "070": "Fidelity Bank",
                  "011": "First Bank of Nigeria",
                  "058": "Guaranty Trust Bank ",
                  "030": "Heritage Bank",
                  "301": "Jaiz Bank",
                  "082": "Keystone ",
                  "014": "Mainstreet ",
                  "076": "Skye Bank",
                  "039": "Stanbic IBTC Bank ",
                  "232": "Sterling bank",
                  "032": "Union Bank",
                  "033": "United Bank for Africa ",
                  "215": "Unity Bank",
                  "035": "Wema Bank",
                  "057": "Zenith International "
                },
                "validations": {
                  "presence": true,
                  "inclusion": {
                    "in": {
                      "063": "Diamond Bank",
                      "050": "EcoBank",
                      "214": "FCMB Bank",
                      "070": "Fidelity Bank",
                      "011": "First Bank of Nigeria",
                      "058": "Guaranty Trust Bank ",
                      "030": "Heritage Bank",
                      "301": "Jaiz Bank",
                      "082": "Keystone ",
                      "014": "Mainstreet ",
                      "076": "Skye Bank",
                      "039": "Stanbic IBTC Bank ",
                      "232": "Sterling bank",
                      "032": "Union Bank",
                      "033": "United Bank for Africa ",
                      "215": "Unity Bank",
                      "035": "Wema Bank",
                      "057": "Zenith International "
                    }
                  }
                }
              },
              "bank_account": {
                "type": "input",
                "validations": {
                  "presence": true
                }
              },
              "bank_account_type": {
                "type": "select",
                "options": {
                  "20": "Current",
                  "10": "Savings"
                },
                "validations": {
                  "presence": true,
                  "inclusion": {
                    "in": {
                      "20": "Current",
                      "10": "Savings"
                    }
                  }
                }
              }
            }
          },
          "metadata": {}
        }
      ],
      "created_at": "2017-07-24T15:08:58Z",
      "expires_at": "2017-07-24T16:08:58Z"
    }
  }`;

  // Once setting up an endpoint where you'll be receiving callbacks you can use the following code snippet
  // to both verify that the webhook we sent out is legitimate, and then parse it's contents regardless of type.

  // The details you need to provide are:
  // - the body of the webhook/callback you received as a string
  // - the url of your webhook, where you are awaiting the callbacks - this has to be the full URL
  // - the authentication headers you have received on your webhook endpoint - as an object

  if (apiClient.validateRequest(webhookUrl, webhookContent, webhookHeader)) {
    const webhook = apiClient.parseResponseString(
      webhookContent,
      TransferZeroSdk.Webhook
    );

    if (webhook.event.startsWith('transaction')) {
      const transactionWebhook = apiClient.parseResponseString(
        webhookContent,
        TransferZeroSdk.TransactionWebhook
      );
      console.log(transactionWebhook);
    } else if (webhook.event.startsWith('recipient')) {
      const recipientWebhook = apiClient.parseResponseString(
        webhookContent,
        TransferZeroSdk.RecipientWebhook
      );
      console.log(recipientWebhook);
    } else if (webhook.event.startsWith('payout_method')) {
      const payoutMethodWebhook = apiClient.parseResponseString(
        webhookContent,
        TransferZeroSdk.PayoutMethodWebhook
      );
      console.log(payoutMethodWebhook);
    } else if (webhook.event.startsWith('sender')) {
      const senderWebhook = apiClient.parseResponseString(
        webhookContent,
        TransferZeroSdk.SenderWebhook
      );
      console.log(senderWebhook);
    } else if (webhook.event.startsWith('document')) {
      const documentWebhook = apiClient.parseResponseString(
        webhookContent,
        TransferZeroSdk.DocumentWebhook
      );
      console.log(documentWebhook);
    }
  } else {
    console.log("Could not verify webhook signature");
  }
}

async function getAccountsExample(apiClient) {
  const api = new TransferZeroSdk.AccountsApi(apiClient);
  try {
    const response = await api.getAccounts();
    response.object.forEach(account => console.log(account));
    console.log(response.meta);
  } catch (e) {
    console.error(e.error.stack);
  }
}

async function getSendersByExternalId(apiClient) {
  // Find more details on external IDs at https://github.com/transferzero/api-documentation/blob/master/transaction-flow.md#external-id

  const api = new TransferZeroSdk.SendersApi(apiClient, {});
  opts = { externalId: 'EXTSEN-5555' };
  try {
    const response = await api.getSenders(opts);
    response.object.forEach(sender => console.log(sender));
    console.log(response.meta);
  } catch (e) {
    console.error(e.error.stack);
  }
}

async function getTransactionsByExternalId(apiClient) {
  // Please see https://github.com/transferzero/api-documentation/blob/master/transaction-flow.md#external-id
  // for more details on external IDs

  const api = new TransferZeroSdk.TransactionsApi(apiClient, {});
  opts = { externalId: 'EXTRAN-5555' };
  try {
    const response = await api.getTransactions(opts);
    response.object.forEach(transaction => console.log(transaction));
    console.log(response.meta);
  } catch (e) {
    console.error(e.error.stack);
  }
}
