import { useState, useEffect } from 'react';

export default function TabContent({
  tabIndex,
}) {

  const [fade, setFade] = useState(' ');

  useEffect(() => {
    setTimeout(() => {setFade(' show')}, 500);
    return(() => {
      setFade('');
    })
  }, [setFade, tabIndex])

  return (
    <>
      <div className={`fade${fade}`}>
        {tabIndex === 0 &&
          <div>0</div>
        }
        {tabIndex === 1 &&
          <div>1</div>
        }
        {tabIndex === 2 &&
          <div>2</div>
        }
      </div>
    </>
  );
}