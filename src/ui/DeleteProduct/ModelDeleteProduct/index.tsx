import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';

interface IModelDeleteProduct {
  isOpen: boolean;
  onOpenChange: () => void;
}

const ModelDeleteProduct = ({ isOpen, onOpenChange }: IModelDeleteProduct) => {
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
                <Button color="primary" onPress={onClose}>
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
