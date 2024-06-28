import React from 'react';

import { useResponsive } from '../../ResponsiveProvider';
import { styles } from '../../style';
import { Button } from '../common/Button';
import { Modal, ModalCloseButton, ModalHeader } from '../common/Modal2';
import { Paragraph } from '../common/Paragraph';
import { View } from '../common/View';

type ConfirmTransactionDeleteProps = {
  onConfirm: () => void;
};

export function ConfirmTransactionDelete({
  onConfirm,
}: ConfirmTransactionDeleteProps) {
  const { isNarrowWidth } = useResponsive();
  const narrowButtonStyle = isNarrowWidth
    ? {
        height: styles.mobileMinHeight,
      }
    : {};

  return (
    <Modal name="confirm-transaction-delete">
      {({ state: { close } }) => (
        <>
          <ModalHeader
            title="Confirm Delete"
            rightContent={<ModalCloseButton onClick={close} />}
          />
          <View style={{ lineHeight: 1.5 }}>
            <Paragraph>
              Are you sure you want to delete the transaction?
            </Paragraph>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                style={{
                  marginRight: 10,
                  ...narrowButtonStyle,
                }}
                onClick={close}
              >
                Cancel
              </Button>
              <Button
                type="primary"
                style={narrowButtonStyle}
                onClick={() => {
                  onConfirm();
                  close();
                }}
              >
                Delete
              </Button>
            </View>
          </View>
        </>
      )}
    </Modal>
  );
}
