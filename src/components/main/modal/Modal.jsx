import React from 'react';
import './style.css';

import { useNavigate } from 'react-router-dom';

function Modal() {
  const navigate = useNavigate();
  return (
    <div className="modal">
      <h2 className="modal__title">Main page – performance issues</h2>
      <p className="modal__text">
        Это был темный лес, издали казавшийся непроходимым. Там Пахапиль
        охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские
        не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он
        появился в Раквере, где советский капитан наградил его медалью. Медаль
        была украшена четырьмя непонятными словами, фигурой и восклицательным
        знаком.
      </p>
      <button onClick={() => navigate(-1)} className='modal__btn'></button>
    </div>
  );
}

export default Modal;
