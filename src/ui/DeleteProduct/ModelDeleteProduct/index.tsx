import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import { handleDeleteProduct } from '@/actions';
import { toast } from 'react-toastify';
import { MESSAGE } from '@/constants';

interface IModelDeleteProduct {
  isOpen: boolean;
  onOpenChange: () => void;
  id: string;
}

const ModelDeleteProduct = ({
  isOpen,
  onOpenChange,
  id,
}: IModelDeleteProduct) => {
  const handleDelete = async () => {
    await handleDeleteProduct(id);
    toast.success(MESSAGE.DELETE_SUCCESSFULLY);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{ base: 'w-96 h-60', wrapper: 'items-center' }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center text-3xl font-semibold text-red-600">
                Warning !!!
              </ModalHeader>
              <ModalBody>
                <p className="text-2xl text-center">
                  Do you really want to delete the product?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={onClose}
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModelDeleteProduct;