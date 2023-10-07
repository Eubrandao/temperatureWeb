const { ServiceBusClient } = require("@azure/service-bus");

export async function getTemperature() {
  const serviceBusClient = new ServiceBusClient("<connectionString>");
  const receiver = serviceBusClient.createReceiver("my-queue");
  const myMessages = await receiver.receiveMessages(10);
  return myMessages;
}
