import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeContext } from "../../context/ThemeContext";
import { SidebarContext } from "../../context/SidebarContext";
import Sidebar from './Sidebar';

test('redirects to dashboard when path is /dashboard', () => {
  render(
    <MemoryRouter initialEntries={['/dashboard']}>
      <ThemeContext.Provider value={{ theme: 'light' }}>
        <SidebarContext.Provider value={{ isSidebarOpen: true, closeSidebar: () => {} }}>
          <Sidebar />
        </SidebarContext.Provider>
      </ThemeContext.Provider>
    </MemoryRouter>
  );

  // Verifica que la página de dashboard se renderice correctamente
  expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
});
