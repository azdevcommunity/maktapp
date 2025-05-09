import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import './index.css'
import router from './routes'
import { store, persistor } from './api/store'
import AutoLoginProvider from './components/AutoLoginProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AutoLoginProvider>
          <RouterProvider router={router} />
        </AutoLoginProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
