
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNMatematicaFacilitadaArSpec.h"

@interface MatematicaFacilitadaAr : NSObject <NativeMatematicaFacilitadaArSpec>
#else
#import <React/RCTBridgeModule.h>

@interface MatematicaFacilitadaAr : NSObject <RCTBridgeModule>
#endif

@end
