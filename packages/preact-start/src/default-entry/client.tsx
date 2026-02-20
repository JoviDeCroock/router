import { hydrate } from 'preact'
import { StartClient } from '@tanstack/preact-start/client'

const target = document.getElementById('__app') ?? document.body
hydrate(<StartClient />, target)
