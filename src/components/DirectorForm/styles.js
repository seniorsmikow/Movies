export const styles = (theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      display: 'flex',
      flexDirection: 'column'
    },
  });