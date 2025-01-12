import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve inserir dois comentários', () => {

        render(<PostComment />);

        fireEvent.change(screen.getByTestId('comentario'), {
            target: {
                value: 'Comentário de teste'
            }
        });

        fireEvent.click(screen.getByTestId('btn'));

        fireEvent.change(screen.getByTestId('comentario'), {
            target: {
                value: 'Segundo comentario de teste'
            }
        });

        fireEvent.click(screen.getByTestId('btn'));

        expect(screen.getAllByTestId('campo-comentario')).toHaveLength(2);
    })
});