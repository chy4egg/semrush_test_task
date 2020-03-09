import React, {useEffect, useState} from 'react';
import {makeStyles, Snackbar, Portal} from "@material-ui/core";
import SnackbarContent, {SnackbarContentProps} from "@material-ui/core/SnackbarContent";
import styles from './Notifier.module.scss';

const DEFAULT_DURATION = 2000;

export interface INotifierState {
  open: boolean,
  message: string,
  variant: 'error' | 'info' | 'success' | 'warning',
  onClick?: () => void,
  duration?: number
}

interface ICustomSnackbarContent {
  message: string,
  variant: INotifierState['variant'],
  onClick?: INotifierState['onClick'],
  duration?: INotifierState['duration'],
}

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: 'green',
  },
  error: {
    backgroundColor: '#d44d4d',
  },
  info: {
    backgroundColor: 'yellow',
  },
  warning: {
    backgroundColor: 'orange',
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
}));

const wrapperStyle = {
  width: '100%',
  cursor: 'pointer',
  zIndex: 100501,
};

let showMessageFn: any = () => {};

/**
 * Notifier
 */
export const Notifier: React.FC = () => {
  const [open, setOpen] = useState<INotifierState['open']>(false);
  const [message, setMessage] = useState<INotifierState['message']>('');
  const [variant, setVariant] = useState<INotifierState['variant']>('success');
  const [onClick, setOnClick] = useState<INotifierState['onClick']>(() => {
  });
  const [duration, setDuration] = useState<INotifierState['duration']>(DEFAULT_DURATION);

  const showMessage = ({variant, message, duration, onClick}: ICustomSnackbarContent) => {
    setOpen(true);
    setMessage(message);
    setVariant(variant);
    setDuration(duration);
    setOnClick(() => onClick)
  };

  useEffect(() => {
    showMessageFn = showMessage;
  });

  const closeSnackbar = () => {
    setOpen(false);
    setMessage('');
    setDuration(DEFAULT_DURATION);
    setVariant('success')
  };

  const handleSnackbarClose = () => {
    closeSnackbar()
  };

  const handlerOnClick = () => {
    closeSnackbar();
    if (onClick) onClick()
  };

  const MySnackbarContentWrapper = (props: SnackbarContentProps & INotifierState) => {
    const {className, message, variant, ...other} = props;
    const classes = useStyles();

    return (
      <SnackbarContent
        className={classes[variant]}
        aria-describedby="client-snackbar"
        message={
          <span
            className={classes.message}
            dangerouslySetInnerHTML={{__html: message}}
          />
        }
        {...other}
      />
    );
  };

  return (
    <Portal>
      <Snackbar
        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        autoHideDuration={duration}
        onClose={handleSnackbarClose}
        onClick={handlerOnClick}
        open={open}
        ContentProps={{
          'aria-describedby': 'snackbar-message-id',
        }}
        style={wrapperStyle}
        className={styles.wrapper}
      >
        <MySnackbarContentWrapper style={{width: '100%'}} message={message} variant={variant as never} open={false}/>
      </Snackbar>
    </Portal>
  )
};

export const showMessage = ({variant, message, duration = DEFAULT_DURATION, onClick}: ICustomSnackbarContent) => {
  showMessageFn({variant, message, duration, onClick})
};

export default Notifier
