import React from 'react'
import{ CircularProgress, Grid, Typography } from '@mui/material'

export default function Loading() {
    return (
        <Grid container justifyContent="center" sx={{mt:5}} >
            <Typography variant="body1"> Loading.... </Typography>
            <Grid item xs={12} sx={{mb:1}}/>
            <CircularProgress/>
        </Grid>
    )
}
