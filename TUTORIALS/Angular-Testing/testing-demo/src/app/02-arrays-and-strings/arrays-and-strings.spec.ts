import { getCurrencies } from './getCurrencies';
import { greet } from './greet';

describe('greet', () => {
    it('should return a string type value', () => {
        const result = greet('Harsh');
        expect(result).toContain('Harsh');
    });
});

describe('getCurrencies', () => {
    it('should return the supported currencies', () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    });
});
