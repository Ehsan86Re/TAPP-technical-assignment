export default function loading() {
  return (
    <div className='container'>
        <div className='data-section flex-row items-center'>
            <div className='profile loading-profile'></div>
            <div className='flex flex-col justify-between gap-4'>
                <div className='loading-box'></div>
                <div className='loading-box'></div>
                <div className='loading-box'></div>
                <div className='loading-box'></div>
            </div>
        </div>
        <div className='data-section flex-col'>
            <div className='loading-box'></div>
            <div className='loading-box'></div>
            <div className='loading-box'></div>
            <div className='loading-box'></div>
        </div>
    </div>
  );
};
