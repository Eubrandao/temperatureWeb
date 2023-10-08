const { ServiceBusClient } = require("@azure/service-bus");

export  async function getTemperature() {
  const serviceBusClient = new ServiceBusClient(process.env.NEXT_PUBLIC_CONNECTION);
  const receiver = serviceBusClient.createReceiver("temperature");
  const myMessages = await receiver.receiveMessages(10);
  const temperatureValue = myMessages[0].body
  console.log(myMessages)
  return temperatureValue;
}
