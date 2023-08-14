import {ThemeOptions} from "@mui/material/styles"
import React from "react"

declare module '@mui/material/styles' {
    interface Theme{
        status:{
            danger: string
        }
    }
    interface ThemeOptions{
        status:{
            danger: React.CSSProperties['color']
        }
    }
    interface PaletteOptions{
        neutral?: PaletteColorOptions
    }
    interface Palette{
        neutral?: PaletteColor
    }
    interface SimplePaletteColorOptions{
        darker ?: string
    }
    interface PaletteColor{
        darker?:string
    }
}