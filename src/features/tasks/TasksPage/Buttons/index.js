import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Wrapper } from './styled';
import Button from '../Button';
import { 
  toggleHideDone, 
  setAllDone, 
  selectAreTasksEmpty, 
  selectHideDone, 
  selectIsEveryTaskDone, 
  // ___________________
  fetchExampleTasks,
  // ___________________
} from '../../tasksSlice';

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      {/* _____________________________________________ */}
      <Button onClick={() => dispatch(fetchExampleTasks())}>
      {/* _____________________________________________ */}
      Descargar tareas de muestra
      </Button>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Show" : "Esconder"} completed tasks
          </Button>
          <Button 
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Completa todas las tareas
          </Button>
        </>
      )}
    </Wrapper> 
  );
};

export default Buttons;