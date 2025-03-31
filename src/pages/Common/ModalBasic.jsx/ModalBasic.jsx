export function ModalBasic(props) {
  const { idModal, children } = props;

  return (
    <dialog id={idModal} className="modal">
      <div className="modal-box">{children}</div>
    </dialog>
  );
}
