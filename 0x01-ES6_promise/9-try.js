/* eslint-disable */
export default function guardrail(mathFunction) {
  const queue = [];
  let function_result = null;

  try {
    function_result = mathFunction();
  } catch (err) {
    function_result = `${err.name}: ${err.message}`;
  }

  queue.push(function_result, 'Guardrail was processed');
  return queue;
}