import React from 'react';
import DialogContent from '@material-ui/core/DialogContent'
import {Dialog as DialogWindow} from "@material-ui/core";
import styles from './Dialog.module.scss';
import {ReactComponent as Icon} from 'src/assets/img/icon/iconClose.svg';

interface IDialogProps {
  children: JSX.Element[] | JSX.Element,
  onClose: () => void,
  scroll?: 'body' | 'paper',
  open: boolean,
}

export const Dialog: React.FC<IDialogProps> = (props) => {

  return (
    <DialogWindow
      scroll={props.scroll || 'body'}
      open={props.open}
      onClose={props.onClose}
      BackdropProps={{
        classes: {root: styles.dialogBackdrop}
      }}
      className={`${styles.dialog} `}
      classes={{
        paper: `${styles.dialogPaper}`,
        root: styles.dialogRoot
      }}
    >
      <DialogContent
        classes={{root: styles.dialogContainer}}
      >
        <div className={styles.contentWrapper}>
          <div className={styles.closeIcon} onClick={props.onClose}>
            <Icon/>
          </div>
          {props.children}
        </div>
      </DialogContent>
    </DialogWindow>
  )
};