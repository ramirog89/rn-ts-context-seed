import { useGeneral } from "../../../context/general/provider";

const ToastList = () => {
  const { state } = useGeneral();

  return (
    <div style={{ position: 'fixed', bottom: '1rem', right: '1rem' }} className="toast-list">
      {state.toastList.map((toast, index) => (
        <div style={{ border: '1px solid gray', padding: '6px', borderRadius: '5px' }} key={index} className={toast.type}>
            {toast.message}
        </div>
      ))}
    </div>
  );
}

export default ToastList;
