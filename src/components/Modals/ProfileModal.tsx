import styled from "styled-components";

type ModalProps = {
  onClose: () => void;
};

const ProfileModal = ({ onClose }: ModalProps) => {
  return (
    <ProfileModalContainer>
      <Mask onClick={onClose} />
      <ModalBody>
        <ModalContent></ModalContent>
      </ModalBody>
    </ProfileModalContainer>
  );
};
export default ProfileModal;

const ProfileModalContainer = styled.div``;

const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 1rem;
  width: 400px;
  height: auto;
  border-radius: 5px;
`;
