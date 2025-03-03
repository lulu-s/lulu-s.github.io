/**
 * ThreeGUI - A wrapper for dat.GUI to easily control Three.js scenes
 * @author lulu-s
 * @version 1.0.0
 */

class ThreeGUI {
    /**
     * Creates a new ThreeGUI instance
     * @param {Object} options - Configuration options
     * @param {Boolean} options.closed - Whether the GUI should be closed by default
     * @param {Number} options.width - Width of the GUI panel
     * @param {String} options.title - Title of the main GUI panel
     */
    constructor(options = {}) {
        this.options = Object.assign({
            closed: false,
            width: 300,
            title: 'Controls'
        }, options);
        
        this.gui = new dat.GUI(this.options);
        this.folders = {};
        
        // Add version to GUI
        // if (options.showVersion !== false) {
        //     const version = this.gui.add({ version: '1.0.0' }, 'version');
        //     version.domElement.style.pointerEvents = 'none';
        //     version.domElement.style.opacity = '0.5';
        // }
    }
    
    /**
     * Creates a folder in the GUI
     * @param {String} name - Folder name
     * @param {Boolean} closed - Whether the folder should be closed by default
     * @returns {dat.GUI} - The created folder
     */
    addFolder(name, closed = false) {
        if (this.folders[name]) return this.folders[name];
        
        const folder = this.gui.addFolder(name);
        if (!closed) folder.open();
        this.folders[name] = folder;
        return folder;
    }
    
    /**
     * Adds a simple property to the GUI
     * @param {Object} object - The object containing the property
     * @param {String} property - The property name
     * @param {Object} options - Additional options (min, max, step, etc.)
     * @param {String} folderName - Optional folder to add the control to
     * @returns {dat.GUIController} - The created controller
     */
    add(object, property, options = {}, folderName = null) {
        const target = folderName ? this.addFolder(folderName) : this.gui;
        
        let controller = target.add(object, property);
        
        if (options.min !== undefined && options.max !== undefined) {
            controller = controller.min(options.min).max(options.max);
        }
        
        if (options.step !== undefined) {
            controller = controller.step(options.step);
        }
        
        if (options.onChange) {
            controller.onChange(options.onChange);
        }
        
        if (options.label) {
            controller.name(options.label);
        }
        
        return controller;
    }
    
    /**
     * Adds a color controller to the GUI
     * @param {Object} object - The object containing the color property
     * @param {String} property - The color property name
     * @param {String} folderName - Optional folder to add the control to
     * @returns {dat.GUIController} - The created controller
     */
    addColor(object, property, folderName = null) {
        const target = folderName ? this.addFolder(folderName) : this.gui;
        return target.addColor(object, property);
    }
    
    /**
     * Adds common controls for a Three.js object
     * @param {THREE.Object3D} object - The Three.js object
     * @param {String} name - Name for the controls folder
     * @param {Object} options - Which controls to include
     * @returns {Object} - Object containing all created controllers
     */
    addObject3D(object, name = 'Object', options = {}) {
        const folder = this.addFolder(name);
        const controllers = {};
        
        // Default options
        options = Object.assign({
            position: true,
            rotation: true,
            scale: true,
            visible: true
        }, options);
        
        // Position controls
        if (options.position) {
            const posFolder = folder.addFolder('Position');
            controllers.posX = posFolder.add(object.position, 'x', -10, 10).step(0.01);
            controllers.posY = posFolder.add(object.position, 'y', -10, 10).step(0.01);
            controllers.posZ = posFolder.add(object.position, 'z', -10, 10).step(0.01);
            posFolder.open();
        }
        
        // Rotation controls (in degrees for easier understanding)
        if (options.rotation) {
            const rotFolder = folder.addFolder('Rotation');
            
            // Create temporary object to convert between degrees and radians
            const rotationDegrees = {
                x: THREE.MathUtils.radToDeg(object.rotation.x),
                y: THREE.MathUtils.radToDeg(object.rotation.y),
                z: THREE.MathUtils.radToDeg(object.rotation.z)
            };
            
            controllers.rotX = rotFolder.add(rotationDegrees, 'x', -180, 180).name('x (deg)').onChange(() => {
                object.rotation.x = THREE.MathUtils.degToRad(rotationDegrees.x);
            });
            
            controllers.rotY = rotFolder.add(rotationDegrees, 'y', -180, 180).name('y (deg)').onChange(() => {
                object.rotation.y = THREE.MathUtils.degToRad(rotationDegrees.y);
            });
            
            controllers.rotZ = rotFolder.add(rotationDegrees, 'z', -180, 180).name('z (deg)').onChange(() => {
                object.rotation.z = THREE.MathUtils.degToRad(rotationDegrees.z);
            });
            
            rotFolder.open();
        }
        
        // Scale controls
        if (options.scale) {
            const scaleFolder = folder.addFolder('Scale');
            controllers.scaleX = scaleFolder.add(object.scale, 'x', 0.1, 5).step(0.1);
            controllers.scaleY = scaleFolder.add(object.scale, 'y', 0.1, 5).step(0.1);
            controllers.scaleZ = scaleFolder.add(object.scale, 'z', 0.1, 5).step(0.1);
            
            // Add uniform scale option
            const scaleUniform = { value: 1 };
            controllers.scaleUniform = scaleFolder.add(scaleUniform, 'value', 0.1, 5).step(0.1).name('Uniform').onChange((value) => {
                object.scale.set(value, value, value);
                
                // Update individual controllers
                controllers.scaleX.updateDisplay();
                controllers.scaleY.updateDisplay();
                controllers.scaleZ.updateDisplay();
            });
            
            scaleFolder.open();
        }
        
        // Visibility control
        if (options.visible) {
            controllers.visible = folder.add(object, 'visible');
        }
        
        return controllers;
    }
    
    /**
     * Adds controls for a Three.js material
     * @param {THREE.Material} material - The material to control
     * @param {String} name - Name for the controls folder
     * @returns {Object} - Object containing all created controllers
     */
    addMaterial(material, name = 'Material') {
        const folder = this.addFolder(name);
        const controllers = {};
        
        // Basic properties common to most materials
        if (material.color) {
            controllers.color = folder.addColor({ color: material.color.getHex() }, 'color')
                .onChange((value) => {
                    material.color.setHex(value);
                });
        }
        
        if (material.opacity !== undefined) {
            controllers.opacity = folder.add(material, 'opacity', 0, 1).step(0.01);
            controllers.transparent = folder.add(material, 'transparent');
        }
        
        if (material.wireframe !== undefined) {
            controllers.wireframe = folder.add(material, 'wireframe');
        }
        
        // Specific properties based on material type
        if (material.metalness !== undefined) {
            controllers.metalness = folder.add(material, 'metalness', 0, 1).step(0.01);
        }
        
        if (material.roughness !== undefined) {
            controllers.roughness = folder.add(material, 'roughness', 0, 1).step(0.01);
        }
        
        if (material.emissive) {
            controllers.emissive = folder.addColor(
                { emissive: material.emissive.getHex() }, 
                'emissive'
            ).onChange((value) => {
                material.emissive.setHex(value);
            });
        }
        
        return controllers;
    }
    
    /**
     * Adds controls for a Three.js light
     * @param {THREE.Light} light - The light to control
     * @param {String} name - Name for the controls folder
     * @returns {Object} - Object containing all created controllers
     */
    addLight(light, name = 'Light') {
        const folder = this.addFolder(name);
        const controllers = {};
        
        // Common light properties
        controllers.intensity = folder.add(light, 'intensity', 0, 3).step(0.01);
        
        if (light.color) {
            controllers.color = folder.addColor({ color: light.color.getHex() }, 'color')
                .onChange((value) => {
                    light.color.setHex(value);
                });
        }
        
        // Position controls if the light has a position
        if (light.position) {
            const posFolder = folder.addFolder('Position');
            controllers.posX = posFolder.add(light.position, 'x', -20, 20).step(0.1);
            controllers.posY = posFolder.add(light.position, 'y', -20, 20).step(0.1);
            controllers.posZ = posFolder.add(light.position, 'z', -20, 20).step(0.1);
        }
        
        // Specific properties for different light types
        if (light.isSpotLight) {
            controllers.angle = folder.add(light, 'angle', 0, Math.PI / 2).step(0.01);
            controllers.penumbra = folder.add(light, 'penumbra', 0, 1).step(0.01);
            controllers.decay = folder.add(light, 'decay', 0, 2).step(0.01);
        }
        
        if (light.isDirectionalLight) {
            controllers.castShadow = folder.add(light, 'castShadow');
        }
        
        return controllers;
    }
    
    /**
     * Adds controls for shader uniforms
     * @param {Object} uniforms - The shader uniforms object
     * @param {String} name - Name for the controls folder
     * @param {Array} exclude - Array of uniform names to exclude
     * @returns {Object} - Object containing all created controllers
     */
    addUniforms(uniforms, name = 'Uniforms', exclude = []) {
        const folder = this.addFolder(name);
        const controllers = {};
        
        for (const key in uniforms) {
            if (exclude.includes(key)) continue;
            
            const uniform = uniforms[key];
            
            // Skip uniforms without a value or that shouldn't be modified
            if (!uniform || uniform.value === undefined) continue;
            
            // Different control based on uniform type
            switch (uniform.type) {
                case 'f': // float
                    controllers[key] = folder.add(uniform, 'value', 0, 1).step(0.01).name(key);
                    break;
                    
                case 'v2': // Vector2
                    const v2Folder = folder.addFolder(key);
                    controllers[key + '_x'] = v2Folder.add(uniform.value, 'x', -10, 10).step(0.01);
                    controllers[key + '_y'] = v2Folder.add(uniform.value, 'y', -10, 10).step(0.01);
                    break;
                    
                case 'v3': // Vector3
                    const v3Folder = folder.addFolder(key);
                    controllers[key + '_x'] = v3Folder.add(uniform.value, 'x', -10, 10).step(0.01);
                    controllers[key + '_y'] = v3Folder.add(uniform.value, 'y', -10, 10).step(0.01);
                    controllers[key + '_z'] = v3Folder.add(uniform.value, 'z', -10, 10).step(0.01);
                    break;
                    
                case 'c': // Color
                    const colorObj = { value: new THREE.Color(uniform.value).getHex() };
                    controllers[key] = folder.addColor(colorObj, 'value').name(key).onChange((value) => {
                        uniform.value.set(value);
                    });
                    break;
            }
        }
        
        return controllers;
    }
    
    /**
     * Adds animation controls
     * @param {Object} animation - The animation object to control
     * @param {String} name - Name for the controls folder
     * @returns {Object} - Object containing all created controllers
     */
    addAnimation(animation, name = 'Animation') {
        const folder = this.addFolder(name);
        const controllers = {};
        
        // Animation speed/timescale
        if (animation.timeScale !== undefined) {
            controllers.timeScale = folder.add(animation, 'timeScale', 0, 2).step(0.01).name('Speed');
        }
        
        // Play/pause button
        const playback = {
            playing: true,
            play: function() {
                playback.playing = true;
                animation.play();
                controllers.playPause.name('Pause');
            },
            pause: function() {
                playback.playing = false;
                animation.pause();
                controllers.playPause.name('Play');
            },
            toggle: function() {
                if (playback.playing) {
                    this.pause();
                } else {
                    this.play();
                }
            }
        };
        
        controllers.playPause = folder.add(playback, 'toggle').name('Pause');
        
        return controllers;
    }
    
    /**
     * Adds preset saving/loading functionality
     * @param {String} name - Name for the presets folder
     * @returns {Object} - Object containing the preset controllers
     */
    addPresets(name = 'Presets') {
        const folder = this.addFolder(name);
        
        // Get presets from localStorage if available
        const savedPresets = localStorage.getItem('threeGUIPresets');
        let presets = savedPresets ? JSON.parse(savedPresets) : {
            'Default': this.gui.getSaveObject()
        };
        
        // Preset management
        const presetController = {
            current: 'Default',
            presets: Object.keys(presets),
            save: function() {
                const name = prompt('Enter preset name:', presetController.current);
                if (!name) return;
                
                presets[name] = gui.getSaveObject();
                presetController.current = name;
                updatePresetList();
                saveToLocalStorage();
            },
            load: function() {
                if (presets[presetController.current]) {
                    gui.load(presets[presetController.current]);
                }
            },
            delete: function() {
                if (presetController.current === 'Default') {
                    alert('Cannot delete the Default preset');
                    return;
                }
                
                if (confirm(`Delete preset "${presetController.current}"?`)) {
                    delete presets[presetController.current];
                    presetController.current = 'Default';
                    updatePresetList();
                    saveToLocalStorage();
                }
            }
        };
        
        // Controllers
        const controllers = {};
        controllers.presetList = folder.add(presetController, 'current', presetController.presets);
        controllers.load = folder.add(presetController, 'load').name('Load');
        controllers.save = folder.add(presetController, 'save').name('Save As...');
        controllers.delete = folder.add(presetController, 'delete').name('Delete');
        
        // Helper function to update the preset dropdown
        const updatePresetList = () => {
            presetController.presets = Object.keys(presets);
            
            // Remove and re-add the controller to refresh the list
            folder.remove(controllers.presetList);
            controllers.presetList = folder.add(presetController, 'current', presetController.presets);
            folder.controllers.unshift(folder.controllers.pop());
        };
        
        // Helper to save presets to localStorage
        const saveToLocalStorage = () => {
            localStorage.setItem('threeGUIPresets', JSON.stringify(presets));
        };
        
        const gui = this.gui;
        return controllers;
    }
    
    /**
     * Destroys the GUI and removes it from the DOM
     */
    destroy() {
        this.gui.destroy();
    }
}

// Export the class
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ThreeGUI;
}
