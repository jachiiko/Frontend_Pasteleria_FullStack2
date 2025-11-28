import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Button from '../atoms/Button.jsx';

/**
 * Test básico para comprobar que el botón se renderiza correctamente.
 */
describe('Button component', () => {
  it('should render the button and be truthy', () => {
    const { getByText } = render(<Button>Probando</Button>);
    const buttonElement = getByText('Probando');
    // El elemento encontrado debe existir en el documento
    expect(buttonElement).toBeTruthy();
  });
});