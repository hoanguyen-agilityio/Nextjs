import { deleteData } from '@/services';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import { revalidateTag } from 'next/cache';

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
  const handleDeleteProduct = async () => {
    try {
      const res = await deleteData(id);
      revalidateTag('product');
      return res;
    } catch (error) {
      console.error('Failed to delete product', error);
    }
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
                  onClick={handleDeleteProduct}
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
