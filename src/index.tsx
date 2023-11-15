import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-matematica-facilitada-ar' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const MatematicaFacilitadaAr = NativeModules.MatematicaFacilitadaAr
  ? NativeModules.MatematicaFacilitadaAr
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

function multiply(a: number, b: number): Promise<number> {
  return MatematicaFacilitadaAr.multiply(a, b);
}

function soma(a: number, b: number): Promise<number> {
  return new Promise((resolve, reject) => {
    const soma: number = a + b;
    resolve(soma);
  });
}

function subtracao(a: number, b: number): Promise<number> {
  return new Promise((resolve, reject) => {
    const subtracao: number = a - b;
    resolve(subtracao);
  });
}

export { multiply, soma, subtracao };
