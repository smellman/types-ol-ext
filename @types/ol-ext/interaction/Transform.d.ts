import { Map as _ol_Map_ } from 'ol';
import Collection from 'ol/Collection';
import Feature from 'ol/Feature';
import { Layer } from 'ol/layer';
import { Style } from 'ol/style';
import { Pointer } from 'ol/interaction';
import MapBrowserEvent from 'ol/MapBrowserEvent';
import { Condition as EventsConditionType } from 'ol/events/condition';
import { Coordinate } from 'ol/coordinate';
import BaseEvent from 'ol/events/Event';
import { Geometry } from 'ol/geom';
import { Pixel } from 'ol/pixel';
import { EventsKey } from 'ol/events';
import { ObjectEvent } from 'ol/Object';

export interface Options {
    filter?: (f: Feature, l: Layer) => boolean;
    layers?: Layer[];
    features?: Collection<Feature>;
    addCondition?: EventsConditionType;
    hitTolerance?: number;
    translateFeature?: boolean;
    translate?: boolean;
    translateBBox?: boolean
    stretch?: boolean;
    scale?: boolean;
    rotate?: boolean;
    noFlip?: boolean;
    selection?: boolean;
    keepAspectRatio?: EventsConditionType;
    modifyCenter?: EventsConditionType;
    enableRotatedTransform?: boolean;
    keepRectangle?: boolean;
    style?: any;
}
export enum RotateEventType {
    ROTATESTART = 'rotatestart',
    ROTATING = 'rotating',
    ROTATEEND = 'rotateend',
}
export enum ScaleEventType {
    SCALESTART = 'scalestart',
    SCALING = 'scaling',
    SCALEEND = 'scaleend',
}
export enum TranslateEventType {
    TRANSLATESTART = 'translatestart',
    TRANSLATING = 'translating',
    TRANSLATEEND = 'translateend',
}

/**
 * Interaction transform
 *
 * @fires select | rotatestart | rotating | rotateend | translatestart | translating | translateend | scalestart | scaling | scaleend
 *
 * @param options
 * @param options.filter A function that takes a Feature and a Layer and returns true if the feature may be transformed or false otherwise.
 * @param options.layers array of layers to transform,
 * @param options.features collection of feature to transform,
 * @param options.addCondition A function that takes an MapBrowserEvent and returns a boolean to indicate whether that event should be handled. default: events.condition.never.
 * @param options.hitTolerance Tolerance to select feature in pixel, default 0
 * @param options.translateFeature Translate when click on feature
 * @param options.translateBBox Enable translate when the user drags inside the bounding box
 * @param options.translate Can translate the feature
 * @param options.stretch can stretch the feature
 * @param options.scale can scale the feature
 * @param options.rotate can rotate the feature
 * @param options.noFlip prevent the feature geometry to flip, default false
 * @param options.selection the intraction handle selection/deselection, if not use the select prototype to add features to transform, default true
 * @param options.keepAspectRatio A function that takes an MapBrowserEvent and returns a boolean to keep aspect ratio, default events.condition.shiftKeyOnly.
 * @param options.modifyCenter A function that takes an MapBrowserEvent and returns a boolean to apply scale & strech from the center, default events.condition.metaKey or events.condition.ctrlKey.
 * @parm options.enableRotatedTransform Enable transform when map is rotated
 * @param options.style list of style for handles
 */
export default class Transform extends Pointer {
    constructor(options?: Options);
    /**
     * Cursors for transform
     */
    Cursors: any;
    /**
     * Remove the interaction from its current map, if any,  and attach it to a new
     * map, if any. Pass `null` to just remove the interaction from the current map.
     * @param map Map.
     * @api stable
     */
    setMap(map: _ol_Map_): void;
    /**
     * Activate/deactivate interaction
     * @param
     * @api stable
     */
    setActive(b: boolean): void;
    /**
     * Set efault sketch style
     */
    setDefaultStyle(): void;
    /**
     * Style for handles
     */
    style: any;
    /**
     * Set sketch style.
     * @param style Style name: 'default','translate','rotate','rotate0','scale','scale1','scale2','scale3','scalev','scaleh1','scalev2','scaleh3'
     * @param olstyle
     * @api stable
     */
    setStyle(style: Style, olstyle: Style | Style[]): void;
    /**
     * Draw transform sketch
     * @param draw only the center
     */
    drawSketch_(draw: boolean): void;
    /**
     * Select a feature to transform
     * @param feature the feature to transform
     * @param add true to add the feature to the selection, default false
     */
    select(feature: Feature | undefined, add: boolean): void;
    /**
     * @param evt Map browser event.
     * @return `true` to start the drag sequence.
     */
    handleDownEvent_(evt: MapBrowserEvent): boolean;
    /**
     * Get features to transform
     * @return
     */
    getFeatures(): Collection<Feature>;
    /**
     * Get the rotation center
     * @return
     */
    getCenter(): Array<Coordinate> | undefined;
    /**
     * Set the rotation center
     * @param c the center point, default center on the objet
     */
    setCenter(c: Array<Coordinate> | undefined): void;
    /**
     * @param evt Map browser event.
     */
    handleDragEvent_(evt: MapBrowserEvent): void;
    /**
     * @param evt Event.
     */
    handleMoveEvent_(evt: MapBrowserEvent): void;
    /**
     * @param evt Map browser event.
     * @return `false` to stop the drag sequence.
     */
    handleUpEvent_(evt: MapBrowserEvent): boolean;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:active', listener: (evt: ObjectEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
    on(type: 'rotatestart', listener: (evt: RotateEvent) => void): EventsKey | EventsKey[];
    once(type: 'rotatestart', listener: (evt: RotateEvent) => void): EventsKey | EventsKey[];
    un(type: 'rotatestart', listener: (evt: RotateEvent) => void): void;
    on(type: 'rotating', listener: (evt: RotateEvent) => void): EventsKey | EventsKey[];
    once(type: 'rotating', listener: (evt: RotateEvent) => void): EventsKey | EventsKey[];
    un(type: 'rotating', listener: (evt: RotateEvent) => void): void;
    on(type: 'rotateend', listener: (evt: RotateEvent) => void): EventsKey | EventsKey[];
    once(type: 'rotateend', listener: (evt: RotateEvent) => void): EventsKey | EventsKey[];
    un(type: 'rotateend', listener: (evt: RotateEvent) => void): void;
    on(type: 'scalestart', listener: (evt: ScaleEvent) => void): EventsKey | EventsKey[];
    once(type: 'scalestart', listener: (evt: ScaleEvent) => void): EventsKey | EventsKey[];
    un(type: 'scalestart', listener: (evt: ScaleEvent) => void): void;
    on(type: 'scaling', listener: (evt: ScaleEvent) => void): EventsKey | EventsKey[];
    once(type: 'scaling', listener: (evt: ScaleEvent) => void): EventsKey | EventsKey[];
    un(type: 'scaling', listener: (evt: ScaleEvent) => void): void;
    on(type: 'scaleend', listener: (evt: ScaleEvent) => void): EventsKey | EventsKey[];
    once(type: 'scaleend', listener: (evt: ScaleEvent) => void): EventsKey | EventsKey[];
    un(type: 'scaleend', listener: (evt: ScaleEvent) => void): void;
    on(type: 'translatestart', listener: (evt: TranslateEvent) => void): EventsKey | EventsKey[];
    once(type: 'translatestart', listener: (evt: TranslateEvent) => void): EventsKey | EventsKey[];
    un(type: 'translatestart', listener: (evt: TranslateEvent) => void): void;
    on(type: 'translating', listener: (evt: TranslateEvent) => void): EventsKey | EventsKey[];
    once(type: 'translating', listener: (evt: TranslateEvent) => void): EventsKey | EventsKey[];
    un(type: 'translating', listener: (evt: TranslateEvent) => void): void;
    on(type: 'translateend', listener: (evt: TranslateEvent) => void): EventsKey | EventsKey[];
    once(type: 'translateend', listener: (evt: TranslateEvent) => void): EventsKey | EventsKey[];
    un(type: 'translateend', listener: (evt: TranslateEvent) => void): void;
}
export class RotateEvent extends BaseEvent {
    constructor(
        type: RotateEventType,
        feature: Feature<Geometry>,
        features: Collection<Feature<Geometry>>,
        angle: number,
        pixel: Pixel,
        coordinate: Coordinate
    );
    feature: Feature<Geometry>;
    features: Collection<Feature<Geometry>>;
    angle: number;
    pixel: Pixel;
    coordinate: Coordinate;
}
export class ScaleEvent extends BaseEvent {
    constructor(
        type: ScaleEventType,
        feature: Feature<Geometry>,
        features: Collection<Feature<Geometry>>,
        scale: [number, number],
        pixel: Pixel,
        coordinate: Coordinate
    );
    feature: Feature<Geometry>;
    features: Collection<Feature<Geometry>>;
    scale: [number, number];
    pixel: Pixel;
    coordinate: Coordinate;
}
export class TranslateEvent extends BaseEvent {
    constructor(
        type: string,
        feature: Feature<Geometry>,
        features: Collection<Feature<Geometry>>,
        delta: [number, number],
        pixel: Pixel,
        coordinate: Coordinate
    );
    feature: Feature<Geometry>;
    features: Collection<Feature<Geometry>>;
    delta: [number, number];
    pixel: Pixel;
    coordinate: Coordinate;
}
