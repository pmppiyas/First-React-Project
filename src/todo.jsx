// Conditional RenderIng

// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finised: {task}</li>;
//   } else {
//     return <li>Work on: {task}</li>;
//   }
// }

// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {isDone ? 'Finised' : 'Work On'} : {task}
//     </li>
//   );
// }

// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {task}
//       {isDone && ': Done'}
//     </li>
//   );
// }
export default function Todo({ task, isDone }) {
  return (
    <li>
      {isDone && 'Ok:' ||!isDone && 'Learning:'} {task}
    </li>
  );
}
